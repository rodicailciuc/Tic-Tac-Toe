import dom from '../dom.js';
import playAgainHandler from '../handlers/playAgainHandler.js';

const playAgainEvent = () => {
    dom.repeatGame.addEventListener('click', playAgainHandler);
};

export default playAgainEvent;
