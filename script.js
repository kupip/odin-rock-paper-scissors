let choices = ["rock", "paper", "scissors"];
let human_score = 0;
let computer_score = 0;

function getComputerChoice() {
  let choice;
  choice = choices[Math.floor(Math.random() * 3)]
  console.log(choice);
  return choice;
}

function getUserChoice() {
  let inp;
  const btns = document.querySelectorAll(".playerSelection");

  btns.forEach((btn) => btn.addEventListener('click', function() {
    if (btn.textContent == "Scissors") {
      inp = "scissors";
    } else if (btn.textContent == "Rock") {
      inp = "rock";
    } else {
      inp = "paper";
    }
  }));
  return inp;
}

function playGame() {
  function playRound(user_inp, com_inp) {
    const div = document.querySelector("div");
    if (user_inp == com_inp) {
      div.textContent = "Tie!";
    }
    else {
      if (user_inp == "rock") {
	if (com_inp == "scissors") {
	  div.textContent = "You win! Rock beats scissors.";
	  human_score++;
	} else {
	  div.textContent = "You lose! Paper beats rock.";
	  computer_score++;
	}
      } else if (user_inp == "paper") {
	if (com_inp == "rock") {
	  div.textContent = "You win! Paper beats rock.";
	  human_score++;
	} else {
	  div.textContent = "You lose! Scissors beats paper.";
	  computer_score++;
	}
      } else {
	if (com_inp == "paper") {
	  div.textContent = "You win! Scissors beats paper.";
	  human_score++;
	} else {
	  div.textContent = "You lose! Rock beats scissors.";
	  computer_score++;
	}
      }
  }
  if (human_score == 5 || computer_score == 5) {
      if (computer_score == 5) {
	alert("Computer Wins");
      } else {
	alert("You win!");
      }
  }
}

  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => btn.addEventListener('click', function() {
    if (btn.textContent == "Rock") {
      playRound("rock", getComputerChoice());
    } else if (btn.textContent == "Paper") {
      playRound("paper", getComputerChoice());
    } else {
      playRound("scissors", getComputerChoice());
    }
  }))
  console.log("Your score: ", human_score);
  console.log("Computer's score: ", computer_score);
}

playGame();
