'use strict';

var test = require('tape');
var format = require('../');

test(function( t ){
	t.equal(format('da-DK', 210023, 'DKK'), 'DKK 2.100,23');

	t.equal(format('da-DK', 210023), '2.100,23');

	t.equal(format('en', 210023), '2,100.23');

	t.equal(format('en', {
		minor: 210023,
		currency: 'DKK',
	}), 'DKK 2,100.23');

	t.equal(format('da-DK', {
		amount: 210023,
		currency: 'DKK',
	}), 'DKK 2.100,23');

	t.equal(format('da-DK', {
		amount: 210023,
	}), '2.100,23');

	t.equal(format('da-DK', {
		amount: 100,
	}), '1,00');

	t.end();
});
