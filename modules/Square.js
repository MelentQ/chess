export default class Square {
    constructor({coords}) {
        this.piece = null;
        this.coords = coords;
        this.isActive = false;
        this.element = this._createElement();
    }

    _createElement() {
        const element = document.createElement('div');
        element.classList.add('square');
        return element;
    }

    setPiece(piece) {
        this.piece = piece;
        this.piece.coords = this.coords;
        this.element.append(this.piece.render());
    }

    removePiece() {
        this.piece = null;
    }

    toggle(force) {
        this.isActive = force;
        this.element.classList.toggle('active', force);
    }

    render() {
        return this.element;
    }
}
