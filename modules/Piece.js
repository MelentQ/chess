// abstract
export default class Piece {
    constructor({coords, icon}) {
        this.coords = coords;
        this.icon = icon;

        this.element = this._createElement();
    }

    _createElement() {
        const element = document.createElement('div');
        element.classList.add('piece');
        element.textContent = this.icon;
        return element;
    }

    check(newCoords) {
        return newCoords !== this.coords;
    }

    render() {
        return this.element;
    }
}
