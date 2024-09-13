let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
  let inp;
  inp = prompt("What's your choice?\n(Rock, Paper, Scissors)");

  String.toLowerCase(inp);
  while (inp != "rock" && inp != "paper" && inp != "scissors") {
    inp = prompt("Input the correct choice!");
    String.toLowerCase();
  }
  return inp;
}
console.log(getComputerChoice());
