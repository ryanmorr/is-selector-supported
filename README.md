# isSelectorSupported

[![Version Badge][version-image]][project-url]
[![Build Status][build-image]][build-url]
[![License][license-image]][license-url]

> Feature test CSS selector support

## Install

Download the [development](http://github.com/ryanmorr/is-selector-supported/raw/master/dist/is-selector-supported.js) or [minified](http://github.com/ryanmorr/is-selector-supported/raw/master/dist/is-selector-supported.min.js) version, or install via NPM:

``` sh
npm install @ryanmorr/is-selector-supported
```

## Usage

To use the method, simply provide a string of the CSS selector:

```javascript
// Check if the :has() selector is supported
isSelectorSupported(':has(img)');

// Check if the case-insensitive attribute selectors are supported
isSelectorSupported('[foo=bar i]');

// Check if the ::backdrop pseudo-element selector is supported
isSelectorSupported('::backdrop');
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/is-selector-supported
[version-image]: https://badge.fury.io/gh/ryanmorr%2Fis-selector-supported.svg
[build-url]: https://travis-ci.org/ryanmorr/is-selector-supported
[build-image]: https://travis-ci.org/ryanmorr/is-selector-supported.svg
[license-image]: https://img.shields.io/badge/license-Unlicense-blue.svg
[license-url]: UNLICENSE
