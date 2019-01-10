"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.computedStyle = computedStyle;
var scope = window;

/**
 * resolve computed stylesheet object
 */
function computedStyle(element) {
    if (element.currentStyle) {
        return element.currentStyle;
    }

    if (scope.getComputedStyle && scope.getComputedStyle(element, null)) {
        return window.getComputedStyle(element, null);
    }

    return element.style;
}