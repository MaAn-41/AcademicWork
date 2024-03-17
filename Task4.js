$(document).ready(function () {
  let userScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function compareChoices(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Tie";
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        return "You Win!";
      } else {
        return "You Lose!";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "You Win!";
      } else {
        return "You Lose!";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        return "You Win!";
      } else {
        return "You Lose!";
      }
    }
  }

  function updateScore(winner) {
    if (winner === "You Win!") {
      userScore++;
    } else if (winner === "You Lose!") {
      computerScore++;
    }
    $("#user-score").text(userScore);
    $("#computer-score").text(computerScore);
  }

  $("#choices button").click(function () {
    const userChoice = $(this)
      .text()
      .trim()
      .toLowerCase()
      .replace(" rock", "")
      .replace(" paper", "")
      .replace(" scissors", ""); // Get user choice (lowercase)
    const computerChoice = getComputerChoice();
    const winner = compareChoices(userChoice, computerChoice);

    $("#user-choice").text(userChoice);
    $("#computer-choice").text(computerChoice);
    $("#winner").text(winner);

    // Show results with animation
    $("#results, #scoreboard").addClass("show");

    updateScore(winner);
  });
});
