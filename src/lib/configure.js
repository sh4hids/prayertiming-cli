import Configstore from 'configstore';

import pkg from '../../package.json';
import inquirer from './inquirer';

const conf = new Configstore(pkg.name);

export async function setConfig() {
  try {
    const config = await inquirer();
    config.dst = config.dst === 'Yes' ? 1 : (config.dst = 'No' ? 0 : undefined);
    conf.set('config', config);
    return config;
  } catch (e) {
    throw new Error('Configuration failed!');
  }
}

export async function getConfig() {
  try {
    let config = conf.get('config') || {};

    if (!Object.keys(config).length) {
      config = await inquirer();
      config.dst =
        config.dst === 'Yes' ? 1 : (config.dst = 'No' ? 0 : undefined);
      conf.set('config', config);
    }

    return config;
  } catch (e) {
    throw new Error('Configuration failed!');
  }
}
