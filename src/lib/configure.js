import CLI from "clui";
import Configstore from "configstore";
import cliSpinners from "cli-spinners";
import inquirer from "./inquirer";
import pkg from "../../package.json";

const Spinner = CLI.Spinner;
const conf = new Configstore(pkg.name);

export async function setConfig() {
  try {
    const config = await inquirer();
    conf.set("config", config);
    return config;
  } catch (e) {
    throw new Error("Configuration failed!");
  }
}

export async function getConfig() {
  try {
    let config = conf.get("config") || {};

    if (!Object.keys(config).length) {
      config = await inquirer();
      conf.set("config", config);
    }

    return config;
  } catch (e) {
    throw new Error("Configuration failed!");
  }
}
