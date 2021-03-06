export default class ClickableElement {
    private element: Element;

    constructor(element: Element) {
        this.element = element;
    }

    /**
     * Know if element is an clickable element
     */
    public isClickable(): boolean {
        if (!this.element.getAttribute) {
            return false;
        }

        return typeof this.element.getAttribute('data-clickable') === 'string';
    }
}