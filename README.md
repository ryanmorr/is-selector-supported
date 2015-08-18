# isSelectorSupported

Determine support for CSS selectors by invoking the `insertRule` method of stylesheets within a try/catch block as unsupported values will throw an error. See a [working example](http://codepen.io/ryanmorr/full/qddQPV/) for all CSS selectors currently defined in the specification (L1-L4).

## Usage

To use the method, simply provide a string of the CSS selector:

```javascript
// is the :has() selector supported
isSelectorSupported(':has(img)');
// is case-insensitive attribute selectors supported
isSelectorSupported('[foo=bar i]');
// is the ::backdrop pseudo-element supported
isSelectorSupported('::backdrop');
```

## Browser Support

* Chrome *
* Firefox *
* Opera *
* Safari *
* Internet Explorer 8+
* Android *
* iOS *

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).
