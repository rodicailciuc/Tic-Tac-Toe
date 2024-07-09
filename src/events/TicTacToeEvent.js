import dom from '../dom.js';
import TicTacToeHandler from '../handlers/TicTacToeHandler.js';

const TicTacToeEvent = () => {
    dom.startGame.addEventListener('click', TicTacToeHandler);
};

export default TicTacToeEvent;
