'use strict';

var defined = require('defined');

var supported = typeof Intl === 'object'
	&& typeof Intl.NumberFormat === 'function';

module.exports = format;

function format( opts, amount ){
	if (amount === undefined) {
		amount = opts;
		opts = {};
	}

	var currency = opts.currency || amount.currency;
	var major = defined(amount.major, amount.amount, amount);

	if (typeof major !== 'number' || isNaN(major))
		throw new Error('Missing amount or amount not a number');

	var minimumFractionDigits = opts.minimumFractionDigits === undefined
		? 2
		: opts.minimumFractionDigits;

	if (!supported) {
		if (currency)
			return currency.toUpperCase()+' '+major.toFixed(minimumFractionDigits);

		return major.toFixed(minimumFractionDigits);
	}

	var locales = typeof opts === 'string' || Array.isArray(opts)
		? opts
		: (opts.locales || opts.locale || 'en');

	if (currency)
		return major.toLocaleString(locales, {
			style: 'currency',
			currency: currency,
			currencyDisplay: opts.display,
			localeMatcher: opts.matcher,
			useGrouping: opts.grouping,
		});

	return major.toLocaleString(locales, {
		minimumFractionDigits: minimumFractionDigits,
		useGrouping: opts.grouping,
	});
}
