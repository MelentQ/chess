import Piece from "./Piece.js";

export default class Rook extends Piece {
    constructor({coords}) {
        super({coords, icon: "♖"});
    }
}
