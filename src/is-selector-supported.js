/*
 * Append a style element to the DOM
 * for testing selectors with
 */
const root = document.documentElement;
const head = document.head || root;
const style = document.createElement('style');
head.insertBefore(style, head.firstChild);
const sheet = style.sheet;

/*
 * Feature test CSS selector support
 *
 * @param {String} selector
 * @return {Boolean}
 */
export default function isSelectorSupported(selector) {
    try {
        sheet.insertRule(selector + '{}', 0);
        sheet.deleteRule(0);
        return true;
    } catch (e) {
        return false;
    }
}
