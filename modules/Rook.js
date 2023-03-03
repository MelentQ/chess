import Piece from "./Piece.js";

export default class Rook extends Piece {
    constructor({coords, icon}) {
        super({coords, icon});
    }

    check(newCoords) {
        return super.check(newCoords) && (newCoords[0] === this.coords[0] || newCoords[1] === this.coords[1]);
    }
}
