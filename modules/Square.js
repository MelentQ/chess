export default class Square {
    constructor({coords}) {
        this.coords = coords;
        this.element = this.createElement();
    }

    createElement() {
        const element = document.createElement('div');
        element.classList.add('square');
        return element;
    }

    setPiece(piece) {
        this.element.append(piece.render());
    }

    render() {
        return this.element;
    }
}
