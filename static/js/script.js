let resetButton;

function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());

    results = decideWinner(humanChoice, botChoice);

    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
    
    roundCounterFunc();

    winDrawBotWin(results);

    let resetButton = document.getElementById('resetButton');
    //resetButton.onclick = resetGame();
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

//Score is returned as [1, 0] or [0.5, 0.5] etc

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!', 'color': '#8c52ff'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': '#8c52ff'};
    } else {
        return {'message': 'You Won!', 'color': '#8c52ff'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.getElementById('humanDiv');
    let botDiv = document.getElementById('botDiv');
    let messageDiv = document.getElementById('messageDiv');
    let resetDiv = document.getElementById('resetButtonDiv');
    resetButton = document.createElement('button');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding-top: 50%; '>" + finalMessage['message'] + "</h1>";
    resetButton.innerHTML = "Replay";
    resetButton.className = "btn btn-secondary resetButton";
    resetDiv.appendChild(resetButton);
    resetButton.setAttribute('id', 'resetButton');
}

function roundCounterFunc() {
    let roundCounter = document.getElementById('roundCounter');
    let count = 1;
    count++;
    roundCounter.innerHTML = 'Round ' + count;
}

function winDrawBotWin([yourScore, computerScore]) {
    let humanWinCounter = document.getElementById('humanWinCounter');
    let humanCounter = 0;
    let drawCounter = document.getElementById('drawCounter');
    let draw = 0;
    let botWinCounter = document.getElementById('botWinCounter');
    let botCounter = 0;
    if (yourScore === 1) {
        humanCounter++;
        humanWinCounter.innerHTML = humanCounter;
    } else if (yourScore === 0.5) {
        draw++;
        drawCounter.innerHTML = draw;
    } else {
        botCounter++;
        botWinCounter.innerHTML = botCounter;
    }
}

function resetGame() {
    console.log('testtassdf');
    let firstDiv = document.getElementById('humanDiv');
    let secondDiv = document.getElementById('botDiv');
    let thirdDiv = document.getElementById('messageDiv');

    firstDiv.innerHTML = "";
    secondDiv.innerHTML = "";
    resetButton.remove();
    thirdDiv.innerHTML = "";
    
    let rock = document.createElement('img');
    let paper = document.createElement('img');
    let scissors = document.createElement('img');

    rock.src ="static/images/rock.jpg";
    paper.src ="static/images/paper.jpg";
    scissors.src ="static/images/scissors.jpg";

    rock.className = "rpsImg";
    paper.className = "rpsImg";
    scissors.className = "rpsImg";

    rock.setAttribute('id', 'rock');
    paper.setAttribute('id', 'paper');
    scissors.setAttribute('id', 'scissors');

    firstDiv.appendChild(rock);
    secondDiv.appendChild(paper);
    thirdDiv.appendChild(scissors);
}