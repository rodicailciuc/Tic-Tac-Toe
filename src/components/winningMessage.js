const winningMessage = (msg, winner) => {
    const winnerBox = document.createElement('div');
    winnerBox.id = 'winner-box';
    winnerBox.classList.add('winner-box');

    const winnerImg = document.createElement('img');
    winnerImg.classList.add('winnerImg');
    winnerImg.src = './assets/winner.png';
    winnerImg.alt = 'winner';

    const winnerMessage = document.createElement('p');
    winnerMessage.classList.add('winner-message');
    winnerMessage.innerText = `${msg} ${winner}`;

    const audio = document.createElement('audio');
    audio.style.display = 'none';

    const source = document.createElement('source');
    audio.src = './assets/win.wav';
    audio.type = 'audio/wav';

    audio.append(source);

    winnerBox.append(winnerImg, winnerMessage, audio);

    const playSound = () => {
        audio.play();
    };
    playSound();

    return winnerBox;
};

export default winningMessage;
