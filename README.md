# Amount format

Leverage the browser to format amounts according to a locale.

**Work in progress**

This module currently works by doing some manual decimal stuff that is really
not localized since the state of browser internationalization is yet too bad.
Once browsers catches up, it will be updated.

```shell
npm install amount-format --save
```

```js
var format = require('amount-format');

format('da-DK', 210023, 'DKK');	// DKK 2.100,23

format('da-DK', 210023);	// 2.100,23

format('en', 210023);	// 2,100.23

format('en', {
	minor: 210023,
	currency: 'DKK',
});	// DKK 2,100.23

format('da-DK', {
	amount: 210023,
	currency: 'DKK',
});	// DKK 2.100,23
```

```shell
$ format-amount --currency USD 124422 --locale en-US
USD 1,244.22
```
