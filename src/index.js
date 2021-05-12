#!/usr/bin/env node
import cities from 'all-the-cities';
import boxen from 'boxen';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import minimist from 'minimist';

import * as configure from './lib/configure';
import { default as format, formatConfig, titleCase } from './lib/format';
import inquirer from './lib/inquirer';
import prayertiming from './lib/prayertiming';
import { default as showUsage } from './lib/usage';

clear();

console.log(
  chalk.yellow(
    figlet.textSync('prayertiming', {
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 72,
    })
  )
);

console.log(
  boxen(chalk.green('-'.repeat(64)), {
    borderStyle: {
      topLeft: ' ',
      topRight: ' ',
      bottomLeft: ' ',
      bottomRight: ' ',
      horizontal: ' ',
      vertical: ' ',
    },
  })
);

const run = async () => {
  try {
    const argv = minimist(process.argv.slice(2));
    const {
      _: booleans,
      type = 'daily',
      help,
      h,
      date,
      city,
      country,
      lat,
      long,
      elv,
      timeFormat,
      method,
      timezone,
      dst,
    } = argv;

    let config = {
      date,
      type,
      lat,
      long,
      elv,
      timeFormat,
      method,
      timezone,
      dst,
    };

    Object.keys(config).forEach(
      (key) => config[key] === undefined && delete config[key]
    );

    if (booleans.includes('configure')) {
      config = { ...config, ...(await configure.setConfig()) };
    }

    if (booleans.includes('showConfig')) {
      config = await configure.getConfig();

      console.log(formatConfig(config));
      return;
    }

    if (booleans.includes('help') || h || help) {
      showUsage();
      return;
    }

    if (city && country) {
      const filteredCities = cities.filter(
        (item) =>
          item.name.match(titleCase(city)) &&
          item.country === country.toUpperCase()
      );
      config.lat = filteredCities[0].loc.coordinates[1];
      config.long = filteredCities[0].loc.coordinates[0];
    }

    if (!lat || !long) {
      config = { ...(await configure.getConfig()), ...config };
    }

    config.elv = config.elv ? Number(config.elv) : 0;

    const timing = prayertiming(config);

    console.log(format(type, timing));
  } catch (e) {
    console.log(chalk.red(e));
  }
};

run();
