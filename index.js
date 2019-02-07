console.log("hi");

const title = "Rock, Paper, Scissors?";

function playGame(playerMove) {
  const ranNum = getRandomInt();
  var computerMove = getRandom(ranNum);
  const result = compareMove(playerMove, computerMove);
  console.log(result);
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
    return "it's a draw";
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      return "Computer Wins!";
    } else if (computerMove === "paper") {
      return "Player Wins!";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "paper") {
      return "Computer Wins!";
    } else if (computerMove === "scissors") {
      return "Player Wins!";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      return "player Wins!";
    } else if (computerMove === "scissors") {
      return "Computer Wins!";
    }
  } else {
    console.error("Pick one of those 3 smart ass!");
  }
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
