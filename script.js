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
  inp = prompt("What's your choice?\n(Rock, Paper, Scissors)");

  inp.toLowerCase();
  while (inp != "rock" && inp != "paper" && inp != "scissors") {
    inp = prompt("Input the correct choice!");
    inp.toLowerCase();
  }
  console.log(inp);
  return inp;
}

function playGame() {
  function playRound(user_inp, com_inp) {
    if (user_inp == com_inp) {
      console.log("Tie!");
    }
    else {
      if (user_inp == "rock") {
	if (com_inp == "scissors") {
	  console.log("You win! Rock beats scissors.");
	  human_score++;
	} else {
	  console.log("You lose! Paper beats rock.");
	  computer_score++;
	}
      } else if (user_inp == "paper") {
	if (com_inp == "rock") {
	  console.log("You win! Paper beats rock.");
	  human_score++;
	} else {
	  console.log("You lose! Scissors beats paper.");
	  computer_score++;
	}
      } else {
	if (com_inp == "paper") {
	  console.log("You win! Scissors beats paper.");
	  human_score++;
	} else {
	  console.log("You lose! Rock beats scissors.");
	  computer_score++;
	}
      }
    }
  }
  for (let i=1; i<=5; i++) {
    playRound(getUserChoice(), getComputerChoice());
  }
  console.log("Your score: ", human_score);
  console.log("Computer's score: ", computer_score);
}

playGame();
