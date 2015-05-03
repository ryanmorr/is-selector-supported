(function(win){
    'use strict';

    var doc = win.document,
    root = doc.documentElement,
    head = doc.head || root,
    style = doc.createElement('style'),
    sheet;

    head.insertBefore(style, head.firstChild);
    sheet = style.sheet;

    win.isSelectorSupported = function isSelectorSupported(selector){
        try{
            sheet.insertRule(selector + '{}', 0);
            sheet.deleteRule(0);
            return true;
        }catch(e){
            return false;
        }
    };
    
})(this);