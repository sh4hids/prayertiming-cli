import cities from 'all-the-cities';
import inquirer from 'inquirer';

import { titleCase } from './format';

export default function askForConfig() {
  const questions = [
    {
      name: 'city',
      type: 'input',
      message: 'Enter your city name:',
    },
    {
      name: 'country',
      type: 'input',
      message: 'Enter your country code:',
    },
    {
      name: 'lat',
      type: 'input',
      message: 'Enter your latitude:',
      when: (answers) => {
        if (!answers.city || !answers.country) {
          return true;
        }

        const filteredCities = cities.filter(
          (city) =>
            city.name.match(titleCase(answers.city)) &&
            city.country === answers.country.toUpperCase()
        );
        return filteredCities.length ? false : true;
      },
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a vlid latitude';
        }
      },
    },
    {
      name: 'long',
      type: 'input',
      message: 'Enter your longitude:',
      when: (answers) => {
        if (!answers.city || !answers.country) {
          return true;
        }

        const filteredCities = cities.filter(
          (city) =>
            city.name.match(titleCase(answers.city)) &&
            city.country === answers.country.toUpperCase()
        );
        return filteredCities.length ? false : true;
      },
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a vlid longitude';
        }
      },
    },
    {
      name: 'elv',
      type: 'input',
      message: 'Enter elevation (in meters):',
    },
    {
      name: 'method',
      type: 'list',
      choices: [
        'Egypt',
        'ISNA',
        'Jafari',
        'JAKIM',
        'Karachi',
        'Makkah',
        'MF',
        'MWL',
        'Tehran',
      ],
      default: 'MWL',
      message: 'Select a calculation method:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please select a calculation method';
        }
      },
    },
    {
      name: 'timeFormat',
      type: 'list',
      choices: ['12h', '24h'],
      default: '24h',
      message: 'Select output time format:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please select an output time format';
        }
      },
    },
    {
      name: 'timezone',
      type: 'input',
      message: 'Enter your timezone:',
    },
    {
      name: 'dst',
      type: 'list',
      choices: ['Yes', 'No', 'N/A'],
      default: 'N/A',
      message: 'Is in daylight saving time?',
    },
  ];
  return inquirer.prompt(questions);
}
