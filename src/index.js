#!/usr/bin/env node
import boxen from 'boxen';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import minimist from 'minimist';

import * as configure from './lib/configure';
import { default as format, formatConfig } from './lib/format';
import inquirer from './lib/inquirer';
import prayertiming from './lib/prayertiming';

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
  const argv = minimist(process.argv.slice(2));
  const {
    _: booleans,
    type = 'daily',
    lat,
    long,
    timeFormat = '24h',
    method = 'MWL',
  } = argv;

  let config = { type, lat, long, timeFormat, method };

  if (booleans.includes('configure')) {
    config = { ...config, ...(await configure.setConfig()) };
  }

  if (booleans.includes('showConfig')) {
    config = await configure.getConfig();

    console.log(formatConfig(config));
    return;
  }

  if (!lat || !long) {
    config = { ...config, ...(await configure.getConfig()) };
  }

  const timing = prayertiming(config);

  console.log(format(type, timing));
  return;
};

run();
