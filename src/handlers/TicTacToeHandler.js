import dom from '../dom.js';
import data from '../data.js';
import TicTacToe from '../modules/ticTacToe.js';

const TicTacToeHandler = () => {
    dom.startGame.classList.add('opacity-hide');
    dom.ready.classList.add('opacity-hide');
    setTimeout(() => {
        dom.startGame.classList.add('displayNone');
        dom.ready.classList.add('displayNone');
    }, 300);
    data.game = new TicTacToe();

    setTimeout(() => {
        dom.squareContainer.classList.add('opacity-show');
    }, 500);
};

export default TicTacToeHandler;
