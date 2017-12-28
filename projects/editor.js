/*
ElementNet Block Engine
Copyright (c) 2017 ElementNetwork
License: Apache 2.0
*/

/*
HOW TO CREATE BLOCKS
********************
Example code: (new Block('', 'embedJavaScript', 'JavaScript from url: %s', 'Code', {
    code: "<script src=~$0~><\/script>",
    hidden: false,
    movable: true,
})).render();
METHOD CHAINING *IS* ALLOWED
Block types:
(none/other) - stack
r - returns value
b - returns true/false/null/undefined (or equivalents in other languages - such as None in Python)
c - C-shaped block, containing others inside (input accessable by $c in code)
s - start block, such as <!DOCTYPE HTML5>
Input types:
%c - color
%s - string
%b - true/false/null/undefined
%n - number
%m.<menu name in menus var> - dropdown
%t.<menu name in menus var> - dropdown/string
%d.<menu name in menus var> - dropdown/number
To create variating code, there is a small subset of JavaScript available (surrounded by ~ symbols)
The bool?ifTrue/bool?iftrue:ifFalse operators
The +, -, *, and / operators
Parens: ()
The > and < operators
The !, &&, and || operators (|| and && are replaced with | and &)
The == and != operators (== is called as =, != is called as %)
Math.PI, and Math.E, written as P, and E
Math.pow, written as a ^ operator (i.e. 5^2 means Math.pow(5, 2)
Inputs (via $[number of input], max # of inputs is 10)
Escape this character via using @. Example (in PHP):
(new Block('r', 'setVarToRandom', 'set variable %s to ~@~@~', 'Data', {
    code: "$~$0~ = '~@~@~@~@~@~'",
    hidden: false,
    movable: true,
})).render();
Usage of this block:
{set variable [lol] to ~@~@~} --> `$lol = '~@~@~'`
*/
function initBlocks ($) {
    'use strict';
    (function () {
        return;
    }());
    var categories = {}, menus = {}; // eslint-disable-line
    function Block(type, spec, text, category, descriptor) {
        this.code = descriptor.code;
        this.type = type;
        this.spec = spec;
        this.text = text;
        this.category = category;
        if (descriptor.parameterNameDefaults) {
            this.paramaterNameDefaults = descriptor.parameterNameDefaults;
        }
        if (descriptor.buttonLeft) {
            this.buttonLeft = descriptor.buttonLeft;
        }
        if (descriptor.buttonRight) {
            this.buttonRight = descriptor.buttonRight;
        }
        this.desc = descriptor;
        this.element = document.createElement("canvas");
        $(this.element).data("spec", spec).addClass("block");

    }
    Block.prototype.render = function () {
        return this;
    };
    Block.prototype.execute = function (whenDone) {
        var bunch = [], codeLength = this.descriptor.code.length, currentBunch = "", currentChar = "", i = 0, inBunch = false, j = null, k = 0, parsed = "", tempBunch = [], tempBunchCurrent = "", unparsed = this.descriptor.code;
        for (; i < codeLength; i++) {
            j = unparsed[i];
            currentChar = j;
            if (inBunch && currentChar === "~") {
                inBunch = false;
                for (; k < currentBunch.length; k++) {
                    // Left empty for later use
                }
            } else if (currentChar === "~") {
                inBunch = true;
                bunch.append(currentBunch);
                currentBunch = "";
            } else {
                currentBunch += currentChar;
            }
        }
        whenDone(parsed);

        return this;
    };
    window.htmlScript = function () {
        // Basic mods should modify code starting here
        categories = {'': []};
        menus = {};
        (new Block('h', 'doctype', 'document type: HTML 5.0', '', {
            code: '<!DOCTYPE html>',
            hidden: 'true',
            moveable: 'false'
        })).render();
    };
}
void initBlocks;
