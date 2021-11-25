#!/usr/bin/env node

const program = require('commander');
const {
    main
}=require('./index')

program
 .version('1.0.0')
 .description('Retrieving All Google Login Data')

program
.command('get-login-data')
.alias('gld')
.description('Retrieving All Google Login Data')
.action(main)

 program.parse(process.argv);