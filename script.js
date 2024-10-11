let choices = ["rock", "paper", "scissors"];

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

function determineWinner(user_inp, com_inp) {
  if (user_inp == com_inp) {
    return "Tie!";
  }
  else {
    if (user_inp == "rock") {
      if (com_inp == "scissors") {
	return "You win!";
      } else {
	return "Computer win!";
      }
    } else if (user_inp == "paper") {
      if (com_inp == "rock") {
	return "You win!";
      } else {
	return "Computer win!";
      }
    } else {
      if (com_inp == "paper") {
	return "You win!";
      } else {
	return "Computer win!";
      }
    }
  }
}
console.log(determineWinner(getUserChoice(), getComputerChoice()));
