#!/usr/bin/env node

import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import minimist from "minimist";
import boxen from "boxen";

import inquirer from "./lib/inquirer";
import * as configure from "./lib/configure";
import prayertiming from "./lib/prayertiming";
import { getByDayFormat } from "./lib/format";

// const date = new Date("2021-04-24T05:16:54.442Z");
//
// const day = getByDay({
//   date,
//   long: 90.38,
//   lat: 23.75,
//   method: "Karachi",
//   timeFormat: "12h"
// });
//
// const month = getByMonth({
//   month: 3,
//   year: 2021,
//   long: 90.38,
//   lat: 23.75,
//   method: "Karachi",
//   timeFormat: "12h"
// });

clear();

console.log(
  chalk.yellow(
    figlet.textSync("prayertiming", {
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 72
    })
  )
);

console.log(
  boxen(chalk.green("-".repeat(64)), {
    borderStyle: {
      topLeft: " ",
      topRight: " ",
      bottomLeft: " ",
      bottomRight: " ",
      horizontal: " ",
      vertical: " "
    }
  })
);

const run = async () => {
  const argv = minimist(process.argv.slice(2));
  const {
    type = "daily",
    lat,
    long,
    timeFormat = "24h",
    method = "MWL"
  } = argv;
  let config = { type, lat, long, timeFormat, method };

  if (!lat || !long) {
    config = await configure.getConfig();
  }

  // console.log(config);
  const t = prayertiming(config);

  if (type === "daily") {
    console.log(getByDayFormat(t));
  }
};

run();

// console.log(day);
