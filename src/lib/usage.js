import chalk from 'chalk';
import cliui from 'cliui';

const ui = cliui({});

export default function showUsage() {
  ui.div({
    text: 'Usage:',
    padding: [1, 0, 1, 0],
  });

  ui.div(
    {
      text: `${chalk.green('prayertiming')} ${chalk.yellow('[options]')}`,
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'display prayer times',
      width: 48,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: `${chalk.green('prayertiming')} ${chalk.yellow('configure')}`,
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'create new configuration',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: `${chalk.green('prayertiming')} ${chalk.yellow('help')}`,
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'show usage info',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: `${chalk.green('prayertiming')} ${chalk.yellow('showConfig')}`,
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'display current config',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div({
    text: 'Options (optional):',
    padding: [1, 0, 1, 0],
  });

  ui.div(
    {
      text: '--city',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'valid city name',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--country',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'ISO 3166-1 Alpha-2 code',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--date',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'a valid date',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--dst',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'daylight saving time (1 or 0)',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--elv',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'elevation (in meters)',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--help',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'show usage info',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--lat',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'latitude (-90 to 90)',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--long',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'longitude (-180 to 180)',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--method',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'calculation method',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--timeFormat',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'output time format (12h/24h)',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--timezone',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'the difference to GMT in hours',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div(
    {
      text: '--type',
      width: 32,
      padding: [0, 1, 1, 1],
    },
    {
      text: 'output format (daily/monthly)',
      width: 32,
      padding: [0, 1, 0, 1],
    }
  );

  ui.div({
    text: 'Alias:',
    width: 32,
    padding: [0, 1, 1, 0],
  });

  ui.div({
    text: chalk.green('pt'),
    width: 32,
    padding: [0, 1, 1, 1],
  });

  console.log(ui.toString());
  return;
}
