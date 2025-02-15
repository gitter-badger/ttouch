#!/usr/bin/env node
"use strict";

const header = require('./src/helper/header');
const controller = require('./src/controller');

const argv = require('yargs')
    .option('dest', {
        alias: 'd',
        describe: 'The target folder for the created file(s)'
    })
    .option('template', {
        alias: 't',
        describe: 'The used template for the given file(s)'
    })
    .demandCommand(1)
    .help()
    .argv;

let options = {
    commandBase: process.cwd(),
    files: argv._,
    dest: argv.dest,
    template: argv.template
};

header();
controller(options);
