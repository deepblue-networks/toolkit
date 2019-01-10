const scope = window;

/**
 * resolve computed stylesheet object
 */
export function computedStyle(element) {
    if (element.currentStyle) {
        return element.currentStyle;
    }

    if (scope.getComputedStyle && scope.getComputedStyle(element, null)) {
        return window.getComputedStyle(element, null);
    }

    return element.style;
}