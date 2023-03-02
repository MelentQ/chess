import Square from "./Square.js";

export default class Board {
    constructor(pieces = []) {
        this.element = this.createElement();
        this.squares = this.generateSquares();
        this.pieces = pieces;
        this.setPieces();
    }

    createElement() {
        const element = document.createElement('div');
        element.classList.add('board');
        return element;
    }

    generateSquares() {
        const squares = [];
        for (let i = 0; i < 8; i++) {
            const ranks = [];
            for (let j = 0; j < 8; j++) {
                const square = new Square({coords: [i, j]})
                ranks.push(square);
            }
            squares.push(ranks);
        }
        return squares;
    }

    setPieces() {
        this.pieces.forEach(piece => {
            this.squares[piece.coords[0]][piece.coords[1]].setPiece(piece);
        })
    }

    render() {
        this.squares.forEach(rank => {
            rank.forEach(square => {
                this.element.append(square.render());
            })
        });

        return this.element;
    }
}
