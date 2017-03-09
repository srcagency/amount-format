# Amount format

A wrapper around `Number.prototype.toLocaleString`.

The purpose is to provide a unified API for formatting currency amounts
regardless of browser support and whether the currency is known or not.

```js
// modern browser
format('da-DK', { currency: 'DKK', major: 1500.5 });
	// 1.500,50 kr.

// legacy browser
format('da-DK', { currency: 'DKK', major: 1500.5 });
	// DKK 1500.50

format({
	locales: [ 'da-DK', 'en-GB' ],
	display: 'code',
	currency: 'GBP',
}, 100.2);
	// 100,20 GBP

format([ opts|locale,] amount|{ currency, major });
```

Options are:

- `currency` (three letter ISO)
- `locale` (e.g. `da-DK` or simply `da`)
- `locales` (an array of prioritized locales, left to right)
- `display` (one of `symbol` (default), `code` or `name`)
- `matcher` (`best fit` (default) or `lookup`)
- `grouping` (whether to use thousand separators, detaults to `true`)
- `minimumFractionDigits` (used only if localization is not supported, defaults to `2`)

```shell
$ format-amount --currency USD 124422 --locale en-US
USD 1,244.22
```
