import Board from "./modules/Board.js";
import Rook from "./modules/Rook.js";

const root = document.querySelector('.root');

const board = new Board([
    new Rook({coords: [0, 0]}),
    new Rook({coords: [7, 0]})
]);

root.append(board.render());
