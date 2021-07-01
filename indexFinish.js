console.log("hi");

const title = "Rock, Paper, Scissors?";
var playerScore = 0;
var compScore = 0;

plyScr = document.getElementById("playerScore");
cmpScr = document.getElementById("computerScore");

function playGame(playerMove) {
  const ranNum = getRandomInt();
  var computerMove = getRandom(ranNum);
  const result = compareMove(playerMove, computerMove, playerScore, compScore);
  scoreCard(result);
  console.log(`player: ${playerMove} computer: ${computerMove}`);
  console.log(`result: ${result}`);
  console.log(`Player Score: ${playerScore} Computer Score: ${compScore} `);
}

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function getRandom(x) {
  if (x === 0) {
    return "rock";
  } else if (x === 1) {
    return "scissors";
  } else if (x === 2) {
    return "paper";
  }
}

function compareMove(playerMove, computerMove) {
  if (playerMove === computerMove) {
    alert("it's a draw");
  } else if (
    (playerMove === "scissors" && computerMove === "rock") ||
    (playerMove === "rock" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "scissors")
  ) {
    alert("Computer Wins!");
    return 1;
  } else {
    alert("Player Wins!");
    return 2;
  }
}

function scoreCard(result) {
  if (result === 1) {
    compScore++;
    cmpScr.innerHTML = compScore;
  } else if (result === 2) {
    playerScore++;
    plyScr.innerHTML = playerScore;
  }
}

function clearScore() {
  playerScore = 0;
  plyScr.innerHTML = playerScore;
  compScore = 0;
  cmpScr.innerHTML = compScore;
}
// Old code
/*if (playerMove === "rock" && computerMove === "paper") {
    console.log("Computer Wins!");
}

else if (playerMove === "rock" && computerMove === "scissors") {
    console.log("Player Wins!");
}

else if (playerMove === "scissors" && computerMove === "paper")
    console.log("Player Wins!");

else if (playerMove === "paper" && computerMove === "scissors") {
    console.log("Computer Wins!");
}

else if (playerMove === "paper" && computerMove === "rock") {
    console.log("Player Wins!");
}

else if (playerMove === "paper" && computerMove === "scissors") {
    console.log("Computer Wins!");
}

else if (playerMove === "paper" && computerMove === "paper") {
    console.log("It's a draw!");
}

else if (playerMove === "scissors" && computerMove === "scissors") {
    console.log("It's a draw!");
}

else if (playerMove === "rock" && computerMove === "rock") {
    console.log("It's a draw!");
} */
