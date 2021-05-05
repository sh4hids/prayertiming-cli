# prayertiming-cli [![Stars](https://img.shields.io/github/stars/sh4hids/prayertiming-cli.svg)](https://github.com/sh4hids/prayertiming-cli) · [![License](https://img.shields.io/github/license/sh4hids/prayertiming-cli.svg)](https://github.com/sh4hids/prayertiming-cli) · [![GitHub issues](https://img.shields.io/github/issues/sh4hids/prayertiming-cli.svg?style=popout)](https://github.com/sh4hids/prayertiming-cli/issues) · [![Build](https://github.com/sh4hids/prayertiming-cli/actions/workflows/build.yml/badge.svg)](https://github.com/sh4hids/prayertiming-cli)

A command line tool to show Muslim prayer times based on coordinates.

### Install

```bash
$ npm i -g prayertiming-cli
```

### Usage:

```bash
 prayertiming [options]          display prayer times

 prayertiming configure          create new configuration

 prayertiming help               show usage info

 prayertiming showConfig         display current config
```

### Options (optional):

```bash
  --date                          a valid date

  --dst                           daylight saving time (1 or 0)

  --help                          show usage info

  --lat                           latitude (-90 to 90)

  --long                          longitude (-180 to 180)

  --method                        calculation method

  --timeFormat                    output time format (12h/24h)

  --timezone                      the difference to GMT in hours

  --type                          output format (daily/monthly)
```

### Alias:

```bash
 pt
```

### Screenshots

- daily

![prayertiming-daily](screenshots/prayertiming-daily.jpg)

- monthly

![prayertiming-monthly](screenshots/prayertiming-monthly.jpg)

### Uninstall

```bash
$ npm uninstall -g prayertiming-cli
```

### Related projects

- [prayertiming](https://github.com/sh4hids/prayertiming)
