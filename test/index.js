'use strict';

var test = require('tape');
var format = require('../');

test(function( t ){
	t.equal(format('da-DK', { currency: 'DKK', major: 2100.23 }), '2.100,23 kr.');
	t.equal(format('da-DK', { currency: 'USD', major: 2100.23 }), '2.100,23 $');
	t.equal(format('da-DK', { major: 2100.23 }), '2.100,23');
	t.equal(format('da-DK', 2100.23), '2.100,23');

	t.equal(format('en-US', { currency: 'DKK', major: 2100.23 }), 'DKK2,100.23');
	t.equal(format('en-US', { currency: 'USD', major: 2100.23 }), '$2,100.23');
	t.equal(format('en-US', { major: 2100.23 }), '2,100.23');
	t.equal(format('en-US', 2100.23), '2,100.23');

	t.equal(format(2100.23), '2,100.23');
	t.equal(format({ currency: 'GBP', major: 2100.23 }), '£2,100.23');

	t.equal(format('da-dk', 2100.23), '2.100,23');
	t.equal(format([ 'xx-XX', 'da-dk' ], 2100.23), '2.100,23');
	t.equal(format('en', 2100.23), '2,100.23');
	t.equal(format('en', { amount: 2100.23 }), '2,100.23');

	t.throws(function(){
		format('_', 100);
	}, /RangeError/, 'invalid locale format');

	t.equal(format('en', 0), '0.00');

	t.equal(format('en', -0), '0.00');

	t.equal(format('en', -200), '-200.00');

	t.equal(format('en-US', { currency: 'NOK', major: -200}), '-NOK200.00');

	t.throws(function(){
		format('en');
	}, 'Missing amount or amount not a number');

	t.throws(function(){
		format('en', NaN);
	}, 'Missing amount or amount not a number');

	t.throws(function(){
		format('en', '1.00', 'NOK');
	}, 'invalid number format');

	t.end();
});
