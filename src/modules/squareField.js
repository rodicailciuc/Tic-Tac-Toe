import dom from '../dom.js';
import data from '../data.js';
import fieldBuilder from '../components/fieldCreator.js';
import gameStatus from './gameStatus.js';

class SquareField {
    wasUsed = false;
    field;
    sign;

    constructor() {
        this.fieldCreator();
    }

    fieldCreator() {
        this.field = fieldBuilder();
        this.field.addEventListener('click', () => this.setSign());
        dom.squareContainer.append(this.field);
    }

    setSign() {
        if (!this.wasUsed && gameStatus.gameInProgress) {
            this.wasUsed = !this.wasUsed;
            this.sign = gameStatus.getSignAndSwitchPlayer();
            this.field.innerText = this.sign;
            this.playMoveSound(this.sign);
            gameStatus.numOfFieldsUsed++;
            data.game.checkWin();
        }
    }

    playMoveSound(sign) {
        const audio = new Audio(
            sign === 'x'
                ? './assets/sounds_click.wav'
                : './assets/sci-fi-click-.wav',
        );
        audio.play();
    }
    restart() {
        this.wasUsed = false;
        this.field.innerText = '';
        this.sign = '';
    }
}

export default SquareField;
