let count = 1;
let humanCounter = 0;
let draw = 0;
let botCounter = 0;

function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());

    results = decideWinner(humanChoice, botChoice);

    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
    
    winDrawBotWin(results);
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

    document.getElementById('rock').style.display = "none";
    document.getElementById('paper').style.display = "none";
    document.getElementById('scissors').style.display = "none";

    let humanDiv = document.getElementById('humanDiv');
    let botDiv = document.getElementById('botDiv');
    let messageDiv = document.getElementById('messageDiv');

    //Created three new sub divs below to be removed when game is reset. Leaving the orignals to be redisplyed on reset.
    let humanChoiceDiv = document.createElement('div');
    let messageResultDiv = document.createElement('div');
    let botChoiceDiv = document.createElement('div');

    humanChoiceDiv.setAttribute('id', 'humanChoiceDiv');
    messageResultDiv.setAttribute('id', 'messageResultDiv');
    botChoiceDiv.setAttribute('id', 'botChoiceDiv');

    humanDiv.appendChild(humanChoiceDiv);
    messageDiv.appendChild(messageResultDiv);
    botDiv.appendChild(botChoiceDiv);

    humanChoiceDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'>";
    botChoiceDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'>";
    messageResultDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding-top: 50%; '>" + finalMessage['message'] + "</h1>";

    document.getElementById('resetButtonDiv').style.display = "inline";
}

function roundCounterFunc() {
    let roundCounter = document.getElementById('roundCounter');
    count++;
    roundCounter.innerHTML = 'Round ' + count;
}

function winDrawBotWin([yourScore, computerScore]) {
    let humanWinCounter = document.getElementById('humanWinCounter');
    let drawCounter = document.getElementById('drawCounter');
    let botWinCounter = document.getElementById('botWinCounter');
    
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
    document.getElementById('humanChoiceDiv').remove();
    document.getElementById('messageResultDiv').remove();
    document.getElementById('botChoiceDiv').remove();
    document.getElementById('resetButtonDiv').style.display = "none";
    
    document.getElementById('rock').style.display = "inline";
    document.getElementById('paper').style.display = "inline";
    document.getElementById('scissors').style.display = "inline";
    roundCounterFunc()
}