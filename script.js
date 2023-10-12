const $ = document;
const player1ScoreSpan = $.querySelector('#player1-score');
const player2ScoreSpan = $.querySelector('#player2-score');
const maxScoreSelect = $.querySelector('#max-score');
const player1Btn = $.querySelector('#player1-btn');
const player2Btn = $.querySelector('#player2-btn');
const resetBtn = $.querySelector('#reset-btn');
let player1Score = 0;
let player2Score = 0;
let isGameOver;

function gameStart() {
    isGameOver = false;
    maxScoreSelect.disabled = true;
};

function checkScore(playerScore, maxScore, wonPlayer, lostPlayer) {
    if (playerScore === maxScore) {
        wonPlayer.classList.add('winner');
        lostPlayer.classList.add('loser');
        gameOver()
    }
};

function gameOver() {
    isGameOver = true;
    player1Btn.disabled = true;
    player2Btn.disabled = true;
};

player1Btn.addEventListener('click', () => {
    const maxScore = parseInt(maxScoreSelect.value);
    gameStart();
    if (player1Score < maxScore) {
        ++player1Score;
        player1ScoreSpan.textContent = `${player1Score} `;
        checkScore(player1Score, maxScore, player1ScoreSpan, player2ScoreSpan);
    }
});

player2Btn.addEventListener('click', () => {
    const maxScore = parseInt(maxScoreSelect.value);
    gameStart();
    if (player2Score < maxScore) {
        ++player2Score;
        player2ScoreSpan.textContent = ` ${player2Score}`;
        checkScore(player2Score, maxScore, player2ScoreSpan, player1ScoreSpan);
    }
});

resetBtn.addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    player1ScoreSpan.textContent = `${player1Score} `;
    player2ScoreSpan.textContent = ` ${player2Score}`;
    player1Btn.disabled = false;
    player2Btn.disabled = false;
    maxScoreSelect.disabled = false;
    isGameOver = false;
    player1ScoreSpan.classList.remove('winner');
    player1ScoreSpan.classList.remove('loser');
    player2ScoreSpan.classList.remove('winner');
    player2ScoreSpan.classList.remove('loser');
});
