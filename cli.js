#!/usr/bin/env node

var argv = process.argv.slice(2);
var exec = require('child_process').exec;

if (argv.length === 0) {
	throw new Error('You have to provide some words to kayakize');
}

var phrase = argv.join(' ');
var str = require('./kayak')(phrase);

// copy to clipboard
exec('echo | set /p=' + str + '| clip');

console.log(str);