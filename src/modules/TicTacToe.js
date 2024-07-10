import gameStatus from './gameStatus.js';
import SquareField from './squareField.js';
import winningMessage from '../components/winningMessage.js';
import playAgainEvent from '../events/playAgainEvent.js';
import dom from '../dom.js';

class TicTacToe {
    constructor() {
        this.squareFields = Array.from({ length: 3 }, () =>
            Array.from({ length: 3 }, () => new SquareField()),
        );
    }

    checkWin() {
        const winLines = [
            [
                [0, 0],
                [0, 1],
                [0, 2],
            ],
            [
                [1, 0],
                [1, 1],
                [1, 2],
            ],
            [
                [2, 0],
                [2, 1],
                [2, 2],
            ],
            [
                [0, 0],
                [1, 0],
                [2, 0],
            ],
            [
                [0, 1],
                [1, 1],
                [2, 1],
            ],
            [
                [0, 2],
                [1, 2],
                [2, 2],
            ],
            [
                [0, 0],
                [1, 1],
                [2, 2],
            ],
            [
                [2, 0],
                [1, 1],
                [0, 2],
            ],
        ];

        for (const line of winLines) {
            const [a, b, c] = line.map(
                ([x, y]) => this.squareFields[x][y].sign
            );
            if (a && a === b && a === c) {
                gameStatus.gameInProgress = false;
                gameStatus.winner = a.toUpperCase();
                this.drawWinningLine(line);
                this.afterWin('Congratulations! Winner');
                this.playWinSound();
                return;
            }

            setTimeout(() => {
                if (
                    gameStatus.numOfFieldsUsed === 9 &&
                    gameStatus.gameInProgress === true
                ) {
                    this.afterWin('Draw ! Try again !');
                    this.playLoseSound();
                    gameStatus.gameInProgress = false;
                }
            }, 0);
        }
    }
    drawWinningLine(line) {
        const winningLine = document.createElement('div');
        winningLine.classList.add('winning-line');

        const [start, , end] = line;
        const [startX, startY] = start;
        const [endX, endY] = end;

        const startField = this.squareFields[startX][startY].field;
        const endField = this.squareFields[endX][endY].field;

        const startRect = startField.getBoundingClientRect();
        const endRect = endField.getBoundingClientRect();

        const containerRect = document
            .getElementById('game-frame')
            .getBoundingClientRect();

        const startXPos =
            startRect.left + startRect.width / 2 - containerRect.left;
        const startYPos =
            startRect.top + startRect.height / 2 - containerRect.top;
        const endXPos = endRect.left + endRect.width / 2 - containerRect.left;
        const endYPos = endRect.top + endRect.height / 2 - containerRect.top;

        const length = Math.hypot(endXPos - startXPos, endYPos - startYPos);
        const angle =
            (Math.atan2(endYPos - startYPos, endXPos - startXPos) * 180) /
            Math.PI;

        winningLine.style.width = `${length}px`;
        winningLine.style.transform = `rotate(${angle}deg)`;
        winningLine.style.position = 'absolute';
        winningLine.style.left = `${startXPos}px`;
        winningLine.style.top = `${startYPos}px`;

        document.getElementById('game-frame').appendChild(winningLine);
    }

    afterWin(msg) {
        document
            .getElementById('game-frame')
            .append(winningMessage(msg, gameStatus.winner));
        dom.repeatGame.classList.remove('displayNone');
        playAgainEvent();

        setTimeout(() => {
            this.reduceWinningLineVisibility();
        }, 500);
    }
    reduceWinningLineVisibility() {
        const winningLine = document.querySelector('.winning-line');
        if (winningLine) {
            winningLine.classList.add('low-visibility');
        }
    }

    playWinSound() {
        const audio = new Audio('../assets/win.wav');
        audio.play();
    }
    playLoseSound() {
        const audio = new Audio('../assets/lose_game.wav');
        audio.play();
    }

    playAgain() {
        this.squareFields.forEach((row) =>
            row.forEach((field) => field.restart()),
        );
        const winningLine = document.querySelector('.winning-line');
        if (winningLine) {
            winningLine.remove();
        }
    }
}

export default TicTacToe;
