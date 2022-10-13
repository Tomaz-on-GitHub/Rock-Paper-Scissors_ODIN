"use strict";
console.log("Script file connected");
//there are 5 rounds,
let player=0; //initial number of points of human player
let comp=0;
let round=0; //it is the zero round played
let currentWin = 0; //here statuso of current play will be saved;

function myGame()  {
    for (let i = 0; i < 5; i++) {
        
        // your code here!
        playRound();
        document.getElementById("result1").innerHTML += " round:" + i + ",";
    }
    //declare winner
    if (player>comp) {
        console.log("you win! Good job!")
        document.getElementById("result1").innerHTML += 
        "points:" + player + ":" + comp + " you win! Good job! "
        }
    else if (player === comp) {
        document.getElementById("result1").innerHTML += "points:" + player + " result is even! "
        console.log("even")
        }
    else {
        console.log("you lose!")
        document.getElementById("result1").innerHTML += "points:" + player + " you lose! "
        }
}
//three steps of single round (function playRound)
//playRound();
function playRound(playerSelection) {
    // your code here!
    //1. get input from player (person)
   // let playerSelection = input1();
    //2. get input from computer (script)
    console.log("player choice: " +  playerSelection );
    document.getElementById("playerSelection").innerHTML += playerSelection + ',';
    let computerSelection = getComputerChoice();
    console.log("computer choice: " + computerSelection);
    document.getElementById("computerSelection").innerHTML += computerSelection+ ',';
    //3. compare both inputs (suppose they are valid!), declare winner ,count points
    if (playerSelection !== 0 && computerSelection !== 0 ) { //valid results only
        if (computerSelection === playerSelection) {
            //both are equal, there is no winner
            console.log("same selection");
            player +=0.5;
            comp +=0.5;
            currentWin="even"
        } else if (computerSelection == "paper" && playerSelection =="rock"){
            comp +=1;
            console.log("comp wins: " + comp);
            currentWin="lose" 
        } else if (computerSelection == "scissors" && playerSelection =="paper"){
            comp +=1;
            console.log("comp wins: " + comp); 
            currentWin="lose"
        } else if (computerSelection == "rock" && playerSelection =="scissors"){
            comp +=1;
            console.log("comp wins: " + comp);
            currentWin="lose" 
             
        } else {
            player +=1;
            console.log("player wins: " + player);
            currentWin="win"
            
        }
    }
    //write the round and current results:
    round++; //we add to the round
    document.getElementById("round1").innerHTML = "Round: " + round ;
    document.getElementById("result1").innerHTML = currentWin + "(points:" + player + ")";

    //if this is the 5th round, than declare the winner
    //declare winner
    if (round===5) {
        if (player>comp) {
            console.log("you win! Good job!")
            document.getElementById("result1").innerHTML= 
            "points:" + player + ":" + comp + " you win! Good job! "
            document.getElementById("result1").style.backgroundColor ="green";
            }
        else if (player === comp) {
            document.getElementById("result1").innerHTML= "points:" + player + " result is even! "
            console.log("even")
            document.getElementById("result1").style.backgroundColor ="orange";
            }
        else {
            console.log("you lose!")
            document.getElementById("result1").innerHTML= "points:" + player + " you lose! "
            document.getElementById("result1").style.backgroundColor ="red";
            }
    }
    //if this is the 6th round, than this is a new game (reset everything and start new)...
    if (round===6) {
        location.reload();
    }
 //console.log(playRound(playerSelection, computerSelection));
 
  }

/*
  function input1() {
let  playerSelection = prompt("Please give your selection" ,"scissors").toLowerCase();
if (playerSelection === 'paper' || playerSelection === 'rock' || playerSelection === 'scissors' ) {
    document.getElementById("playerSelection").innerHTML += playerSelection + ',';
    return playerSelection;
  } else {return 0;}
}
*/

/*
function myFunction(argument) {
    let  playerSelection  = prompt("Please confirm your selection" ,argument);
    if (playerSelection != null) {
      document.getElementById("playerSelection").innerHTML += playerSelection;
      return playerSelection;
    }
  }

*/

 
 //const computerSelection = getComputerChoice();
 //console.log(computerSelection);
 
 
 function getComputerChoice() {
    //we will use the random function of the math
    let computerSelection=0; //initial value is false
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    //console.log(randomNumber);
    if (randomNumber === 1) {computerSelection= "rock";} 
    else if (randomNumber === 2) {computerSelection= "paper";}
    else {computerSelection= "scissors";}
    return computerSelection;
 } 
 
 //play five rounds

 //declare absolute winner

 
   
 
  
  