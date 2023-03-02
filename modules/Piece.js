export default class Piece {
    constructor({coords, icon}) {
        this.coords = coords;
        this.icon = icon;

        this.element = this.createElement();
    }

    createElement() {
        const element = document.createElement('div');
        element.classList.add('piece');
        element.textContent = this.icon;
        return element;
    }

    render() {
        return this.element;
    }
}
