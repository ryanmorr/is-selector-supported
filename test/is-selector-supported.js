import isSelectorSupported from '../src/is-selector-supported';

describe('isSelectorSupported', () => {
    it('should return true for supported selectors', () => {
        const selectors = [
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
            ':visited'
        ];

        selectors.forEach((selector) => {
            expect(isSelectorSupported(selector)).to.equal(true);
        });
    });

    it('should return false for unsupported selectors', () => {
        const selectors = [
            '##foo',
            '..foo',
            '[[foo]]',
            ':foo',
            ':bar',
            ':lang()',
            ':nth-child(foo)'
        ];

        selectors.forEach((selector) => {
            expect(isSelectorSupported(selector)).to.equal(false);
        });
    });
});
