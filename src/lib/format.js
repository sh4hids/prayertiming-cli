import chalk from 'chalk';
import Table from 'cli-table';
import { format } from 'date-fns';

export function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
}

export function getByDayFormat(data = {}) {
  const table = new Table({
    colWidths: [32, 32],
  });

  Object.keys(data).forEach((key) => {
    const name = key === 'asrHanafi' ? 'Asr (Hanafi)' : titleCase(key);
    const value =
      key === 'date' ? format(data[key], 'EEE MMM dd, yyyy') : data[key];

    table.push([name, value]);
  });

  return table.toString();
}

export function getByMonthFormat(data = []) {
  const table = new Table({
    head: [
      'Date',
      'Imsak',
      'Fajr',
      'Sunrise',
      'Dhuhr',
      'Asr',
      'Asr (Hanafi)',
      'Sunset',
      'Maghrib',
      'Isha',
      'Midnight',
    ],
  });

  data.forEach((item) => {
    let values = [
      format(item.date, 'EEE MMM dd, yyyy'),
      ...Object.values(item).slice(2),
    ];
    table.push(values);
  });

  return table.toString();
}

export function formatConfig(config = {}) {
  const table = new Table();
  Object.keys(config).forEach((key) => {
    table.push([key, config[key] ? config[key] : chalk.gray('default')]);
  });

  return table.toString();
}

export default function formatData(type = 'daily', data) {
  if (type === 'monthly') {
    return getByMonthFormat(data);
  }

  return getByDayFormat(data);
}
