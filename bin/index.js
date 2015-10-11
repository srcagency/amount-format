#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2));

var format = require('../');

try {
	if (argv._.length === 0)
		throw new Error('Missing amount');

	var amount = +argv._[0];

	console.log(format(argv.locale || 'en', amount, argv.currency));
} catch( e ){
	console.error(e.message);
	process.exit(1);
}
