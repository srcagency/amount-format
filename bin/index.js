#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2));

var format = require('../');

try {
	if (!argv.amount)
		throw new Error('Missing amount');

	console.log(format(argv.locale || 'en', +argv.amount, argv.currency));
} catch( e ){
	console.error(e.message);
	process.exit(1);
}
