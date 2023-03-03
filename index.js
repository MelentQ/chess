import Board from "./modules/Board.js";
import Rook from "./modules/Rook.js";

const root = document.querySelector('.root');

/*
* Board - доска, отвечает за основную логику игры
* Squares - поля доски
* Pieces - абстрактный класс фигуры
* Rook - ладья, наследуется от фигуры
*
* activeSquare - активное поле с фигурой, по которому кликнул игрок
*
* Доска объединяет в себе все элементы игры, в ней основная логика
* Всё взаимодействие происходит не с фигурами, а с полями
* (клик по полю -> проверка наличия фигуры на нём -> клик по второму полю...)
* */

const board = new Board([
    new Rook({coords: [0, 7], icon: "♜"}),
    new Rook({coords: [7, 0], icon: "♖"})
]);

root.append(board.render());
