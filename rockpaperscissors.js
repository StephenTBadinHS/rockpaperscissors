//this is a file to code a playable game of rock paper scissors using javav
var userChoice = prompt("Do you choose rock, paper or scissors?"); 
var computerChoice = Math.random();
//Deciding the values which determine what the computer chooses
 if (computerChoice < .33) 
    { computerChoice = "rock"; }
  else if(computerChoice <= .66) 
    { computerChoice = "paper"; } 
 else { computerChoice = "scissors"; } 
 console.log(userChoice);
 console.log (computerChoice);

//all of the statments to determin if you win,lose,or tie as per the rules of rock, paper, scissors

if (computerChoice == "rock" && userChoice == "paper"){
  console.log; ("paper beats rock YOU WIN!");
}
if (computerChoice == "scissors" && userChoice == "rock"){
console.log ("rock beats scissors YOU WIN!") ;
}
else if (computerChoice == "paper" && userChoice == "scissors"){
  console.log ("scissors beats paper YOU WIN!");
}
if (computerChoice == "rock" && userChoice == "scissors"){
  console.log ("rock beats scissors YOU LOSE")
};
if (computerChoice == "scissors" && userChoice == "paper"){
  console.log ("scissors beats paper YOU LOSE")
}
else if (computerChoice == "paper" && userChoice == "rock"){
  console.log ("paper beats rock YOU LOSE")
}
if (computerChoice === userChoice){
  console.log ("The Choices are the same it's a TIE")
};
//scoring
let humanscore = 0
let computerscore = 0

if (computerChoice == "rock" && userChoice == "paper"){
  console.log ("your score", humanscore + 1, "computer score",computerscore) ; 
}
if (computerChoice == "scissors" && userChoice == "rock"){
console.log ("your score", humanscore + 1,"computer score", computerscore ) ;
}
else if (computerChoice == "paper" && userChoice == "scissors"){
  console.log ("your score", humanscore + 1, "computer score", computerscore);
}
if (computerChoice == "rock" && userChoice == "scissors"){
  console.log ("computer points", computerscore + 1,"human score", humanscore)
};
if (computerChoice == "scissors" && userChoice == "paper"){
  console.log ("computer points", computerscore + 1,"human score", humanscore) 
}
else if (computerChoice == "paper" && userChoice == "rock"){
  console.log ("computer points" ,computerscore + 1, "human score", humanscore)
}
if (computerChoice === userChoice){
  console.log ("computer points" ,computerscore, "human score", humanscore)
};