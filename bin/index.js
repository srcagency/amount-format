#!/usr/bin/env node
'use strict';

const options = require('minimist')(process.argv.slice(2), {
	string: [ 'amount', 'locale', 'currency', 'matcher', 'display' ],
	boolean: [ 'no-grouping' ],
});

const format = require('../');

const amount = options.amount || (options._[0] && +options._[0]);

console.log(format({
	locale: options.locale,
	matcher: options.matcher,
	display: options.display,
	grouping: !options['no-grouping'],
	currency: options.currency,
}, amount));
