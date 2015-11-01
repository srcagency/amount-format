'use strict';

var test = require('tape');
var format = require('../');

test(function( t ){
	t.equal(format('da-DK', 210023, 'DKK'), 'DKK 2.100,23');

	t.equal(format('da-DK', 210023), '2.100,23');

	t.equal(format('da-dk', 210023), '2.100,23');

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

	t.equal(format('da-DK', 100, 'sek'), 'SEK 1,00');

	t.equal(format('da_DK', 100), '1,00', 'locale with underscore');

	t.equal(format([ 'da_DK' ], 100), '1,00', 'locales with underscore');

	t.doesNotThrow(function(){
		format([ 'yy', 'en' ], 100);
	});

	t.equal(format('yy', 100), format('en', 100), 'unknown locale without fallback uses English format');

	t.throws(function(){
		format('_', 100);
	}, /RangeError/, 'invalid locale format');

	t.equal(format('da-DK', {
		amount: 100,
	}), '1,00');

	t.equal(format('en', {
		amount: 0,
	}), '0.00');

	t.equal(format('en', {
		minor: 0,
	}), '0.00');

	t.equal(format('en', 0), '0.00');

	t.equal(format('en', -0), '0.00');

	t.equal(format('en', -200), '-2.00');

	t.equal(format('en', -200, 'NOK'), 'NOK -2.00');

	t.throws(function(){
		format('en', null, 'NOK');
	}, 'invalid number format');

	t.throws(function(){
		format('en', NaN, 'NOK');
	}, 'invalid number format');

	t.throws(function(){
		format('en', '2132', 'NOK');
	}, 'invalid number format');

	t.throws(function(){
		format('en', {
			minor: null,
		});
	}, 'invalid number format');

	t.throws(function(){
		format('en', {
			amount: null,
		});
	}, 'invalid number format');

	t.end();
});
