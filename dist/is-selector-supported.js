/*! @ryanmorr/is-selector-supported v0.1.0 | https://github.com/ryanmorr/is-selector-supported */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.isSelectorSupported = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSelectorSupported;

/*
 * Append a style element to the DOM
 * for testing selectors with
 */
var root = document.documentElement;
var head = document.head || root;
var style = document.createElement('style');
head.insertBefore(style, head.firstChild);
var sheet = style.sheet;
/*
 * Feature test CSS selector support
 *
 * @param {String} selector
 * @return {Boolean}
 */

function isSelectorSupported(selector) {
  try {
    sheet.insertRule(selector + '{}', 0);
    sheet.deleteRule(0);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = exports.default;

},{}]},{},[1])(1)
});

