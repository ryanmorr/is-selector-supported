(function(win){
    'use strict';

    var doc = win.document,
    style = doc.createElement('style');
    doc.head.appendChild(style);

    function isSelectorSupported(selector){
        try{
            style.sheet.insertRule(selector + '{}', 0);
            return true;
        }catch(e){
            return false;
        }
    }

    win.isSelectorSupported = isSelectorSupported;
    
})(this);