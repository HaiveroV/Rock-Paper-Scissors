const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreBoard = {
    player: 0,
    bot: 0
}

// Play Game

function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const botChoice = getBotChoice();
    const winner = getWinner(playerChoice, botChoice);
    showWinner(winner, botChoice, playerChoice);
}

// Get Bot Choice

function getBotChoice() {
    const rnd = Math.random();

    if (rnd < 0.34) {
        return 'rock';
    } else if (rnd <= 0.67) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

// Get Game Winner

function getWinner(p, b) {
    if (p === b) {
        return 'Draw!';
    } else if (p === 'rock') {
        if (b === 'paper') {
            return 'Bot Wins!';
        } else {
            return 'You Win!';
        }
    } else if (p === 'paper') {
        if (b === 'scissors') {
            return 'Bot Win!!';
        } else {
            return 'You Win!';
        }
    } else if (p === 'scissors') {
        if (b === 'rock') {
            return 'Bot Wins!';
        } else {
            return 'You Win!'
        }
    }
}

function showWinner(winner, botChoice, playerChoice) {
    if (winner === 'You Win!') {
        scoreBoard.player++;
        result.innerHTML = `
        <h1 class='text-win'>You Win!</h1>
        <p>Bot Chose 
        <i class="fas fa-hand-${botChoice} fa-10x">
        </i></p>
        <p> You Chose
        <i class="fas fa-hand-${playerChoice} fa-10x">
        </i></p>`;
    } else if (winner === 'Bot Wins!') {
        scoreBoard.bot++;
        result.innerHTML = `
        <h1 class='text-lose'>You Lost!</h1>
        <p>Bot Chose 
        <i class="fas fa-hand-${botChoice} fa-10x">
        </i></p>
        <p> You Chose
        <i class="fas fa-hand-${playerChoice} fa-10x">
        </i></p>`;
    } else {
        result.innerHTML = `
        <h1>It's a Draw!</h1>
        <p>Bot Chose 
        <i class="fas fa-hand-${botChoice} fa-10x">
        </i></p>
        <p> You Chose
        <i class="fas fa-hand-${playerChoice} fa-10x">
        </i></p>`;
    }
    score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Bot: ${scoreBoard.bot}</p>
    `;
    modal.style.display = 'block';
}

//Restart Game 
function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.bot = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Bot: 0</p>
    `;
    restart.style.display = 'none';
}


//Close Modal

function closeModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener(`click`, closeModal);
restart.addEventListener('click', restartGame);