var n = 12345.6789;
var n2 = 1.2;

n.toLocaleString('da-DK', {
	style: 'currency',
	currencyDisplay: 'symbol',
	currency: 'DKK',
});

// Chrome does not fixate fractional digits to two

n.toLocaleString('da-DK', {
	style: 'currency',
	currencyDisplay: 'code',
	currency: 'DKK',
});

// throws in Firefox



// detect formatting support

function toLocaleStringSupportsOptions() {
	return typeof Intl === 'object'
		&& typeof Intl.NumberFormat === 'function';
}
