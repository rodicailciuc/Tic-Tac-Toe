const gameStatus = {
    gameInProgress: true,
    currentPlayer: 1,
    currentSign: 'x',
    winner: '',
    numOfFieldsUsed: 0,

    getSignAndSwitchPlayer() {
        const prevSign = this.currentSign;
        this.currentSign = this.currentSign === 'x' ? 'o' : 'x';
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        return prevSign;
    },

    restartGameStatus() {
        Object.assign(this, {
            gameInProgress: true,
            currentPlayer: 1,
            currentSign: 'x',
            winner: '',
            numOfFieldsUsed: 0,
        });
    },
};

export default gameStatus;
