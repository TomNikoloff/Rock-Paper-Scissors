
function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    //humanChoice = yourChoice.id;
    //console.log(humanChoice);
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    //results = decideWinner(humanChoice, botChoice);
    //message = finalMessage(results);
    //rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}
