import Square from "./Square.js";

export default class Board {
    constructor(pieces = []) {
        this.element = this._createElement();
        this.squares = this._generateSquares();
        this.pieces = pieces;
        this._setPieces();
        this._addEvents();
    }

    _createElement() {
        const element = document.createElement('div');
        element.classList.add('board');
        return element;
    }

    _generateSquares() {
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

    _setPieces() {
        this.pieces.forEach(piece => {
            this.squares[piece.coords[0]][piece.coords[1]].setPiece(piece);
        })
    }

    _getActiveSquare() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (this.squares[i][j].isActive) {
                    return this.squares[i][j];
                }
            }
        }

        return false;
    }

    // Тут происходит смешивание логики доски, полей и фигур
    // Не придумал как это исправить
    _addEvents() {
        this.squares.forEach(ranks => {
            ranks.forEach(square => {
                square.element.addEventListener('click', () => {
                    const activeSquare = this._getActiveSquare();
                    if (!square.piece && activeSquare && activeSquare.piece && activeSquare.piece.check(square.coords)) {
                        square.setPiece(activeSquare.piece);
                        activeSquare.removePiece();
                        activeSquare.toggle(false);
                    } else if (square.piece && !activeSquare) {
                        square.toggle(true);
                    }
                })
            })
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
