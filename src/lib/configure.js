import cities from 'all-the-cities';
import Configstore from 'configstore';

import pkg from '../../package.json';
import { titleCase } from './format';
import inquirer from './inquirer';

const conf = new Configstore(pkg.name);

export async function setConfig() {
  try {
    const config = await inquirer();

    if (config.city && config.country) {
      const filteredCities = cities.filter(
        (city) =>
          city.name.match(titleCase(config.city)) &&
          city.country === config.country.toUpperCase()
      );
      config.lat = filteredCities[0].loc.coordinates[1];
      config.long = filteredCities[0].loc.coordinates[0];
    }

    config.dst = config.dst === 'Yes' ? 1 : (config.dst = 'No' ? 0 : undefined);
    conf.set('config', config);
    return config;
  } catch (e) {
    console.log(e);
    throw new Error('Configuration failed!');
  }
}

export async function getConfig() {
  try {
    let config = conf.get('config') || {};

    if (!Object.keys(config).length) {
      config = await inquirer();

      if (config.city && config.country) {
        const filteredCities = cities.filter(
          (city) =>
            city.name.match(titleCase(config.city)) &&
            city.country === config.country.toUpperCase()
        );
        config.lat = filteredCities[0].loc.coordinates[1];
        config.long = filteredCities[0].loc.coordinates[0];
      }

      config.dst =
        config.dst === 'Yes' ? 1 : (config.dst = 'No' ? 0 : undefined);
      conf.set('config', config);
    }

    return config;
  } catch (e) {
    throw new Error('Configuration failed!');
  }
}
