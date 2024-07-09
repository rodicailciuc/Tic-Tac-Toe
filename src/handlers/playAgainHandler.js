import data from '../data.js';
import dom from '../dom.js';
import gameStatus from '../modules/gameStatus.js';

const playAgainHandler = () => {
    const messageBox = document.getElementById('winner-box');
    data.game.playAgain();
    gameStatus.restartGameStatus();
    if (messageBox !== null) {
        messageBox.remove();
    }
    dom.repeatGame.classList.add('displayNone');
};

export default playAgainHandler;
