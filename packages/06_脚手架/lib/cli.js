#!/usr/bin/env node
'use strict';
const meow = require('meow');
const yoScaffold = require('./');

const cli = meow(`
Usage
  $ yo-scaffold [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ yo-scaffold
  unicorns
  $ yo-scaffold rainbows
  unicorns & rainbows
`);
