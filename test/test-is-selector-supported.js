describe('isSelectorSupported', function(){
    'use strict';

    var expect = chai.expect;

    it('should return true for supported selectors', function(){
        var selectors = [
            '*',
            'div',
            'div,div',
            'div div',
            'div > div',
            'div + div',
            'div ~ div',
            '#id',
            '.class',
            '[foo]',
            '[foo=bar]',
            '[foo~=bar]',
            '[foo|=bar]',
            '[foo^=bar]',
            '[foo$=bar]',
            '[foo*=bar]',
            ':active',
            '::after',
            '::before',
            ':first-child',
            ':focus',
            ':hover',
            ':lang(en)',
            ':visited',
        ];
        selectors.forEach(function(selector){
            expect(isSelectorSupported(selector)).to.equal(true);
        });
    });

    it('should return false for unsupported selectors', function(){
        var selectors = [
            '##foo',
            '..foo',
            '[[foo]]',
            ':foo',
            ':bar',
            ':lang()',
            ':nth-child(foo)'
        ];
        selectors.forEach(function(selector){
            console.log(selector)
            expect(isSelectorSupported(selector)).to.equal(false);
        });
    });

});