// Store the RSP
const rSP = ["rock", "scissors", "paper"];

function computerChoice() {
    // randomly return Rock, Paper, or Scissors
    let index = Math.floor(Math.random() * 3);
    console.log(rSP[index]);

    return rSP[index];
}

function playerSelection() {
    let playerInput = prompt("Enter rock, scissors, or paper");
    let playerSelection = playerInput.toLowerCase();
    return playerSelection;
}

let computer = computerChoice();
let player = playerSelection();

match(computer,player);
function match(computer, player) {
    if (computer === "rock") {
        switch (player) {
            case "rock":
                tie();
                break;
            case "scissors":
                lose(computer, player);
                break;
            case "paper":
                wind(computer, player);
        }
    } else if (computer === "scissors") {
        switch (player) {
            case "scissors":
                tie();
                break;
            case "paper":
                lose(computer, player);
                break;
            case "rock":
                wind(computer, player);
        }
    } else if (computer === "paper") {
        switch (player) {
            case "paper":
                tie();
                break;
            case "rock":
                lose(computer, player);
                break;
            case "scissors":
                wind(computer, player);

        }
    } else {
        alert("WHAT???");
    }
}

function wind(computer,player){
    alert(`Player won! ${player} beats ${computer}!`);
}

function lose(computer,player){
    alert(`Computer won! ${computer} beats ${player}!`);
}

function tie() {
    alert("Tie!");
}