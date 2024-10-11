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

function playRound(user_inp, com_inp) {
  if (user_inp == com_inp) {
    return "Tie!";
  }
  else {
    if (user_inp == "rock") {
      if (com_inp == "scissors") {
	console.log("You win! Rock beats scissors.");
      } else {
	console.log("You lose! Paper beats rock.");
      }
    } else if (user_inp == "paper") {
      if (com_inp == "rock") {
	console.log("You win! Paper beats rock.");
      } else {
	console.log("You lose! Scissors beats paper.");
      }
    } else {
      if (com_inp == "paper") {
	console.log("You win! Scissors beats paper.");
      } else {
	console.log("You lose! Rock beats scissors.");
      }
    }
  }
}
console.log(determineWinner(getUserChoice(), getComputerChoice()));
