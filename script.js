"use strict";
console.log("Script file connected");
//there are 5 rounds,
let player=0; //initial number of points
let comp=0;

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
function playRound() {
    // your code here!
    //1. get input from player (person)
    let playerSelection = input1();
    //2. get input from computer (script)
    let computerSelection = getComputerChoice();
    //3. compare both inputs (suppose they are valid!), declare winner ,count points
    if (playerSelection !== 0 && computerSelection !== 0 ) { //valid results only
        if (computerSelection === playerSelection) {
            //both are equal, there is no winner
            console.log("same selection");
            player +=0.5;
            comp +=0.5;
        } else if (computerSelection == "paper" && playerSelection =="rock"){
            comp +=1;
            console.log("comp wins: " + comp); 
        } else if (computerSelection == "scissors" && playerSelection =="paper"){
            comp +=1;
            console.log("comp wins: " + comp); 
        } else if (computerSelection == "rock" && playerSelection =="scissors"){
            comp +=1;
            console.log("comp wins: " + comp); 
             
        } else {
            player +=1;
            console.log("player wins: " + player);
            
        }
    }

 //console.log(playRound(playerSelection, computerSelection));
 
  }

function input1() {
let  playerSelection = prompt("Please give your selection" ,"scissors").toLowerCase();
if (playerSelection === 'paper' || playerSelection === 'rock' || playerSelection === 'scissors' ) {
    document.getElementById("playerSelection").innerHTML += playerSelection + ',';
    return playerSelection;
  } else {return 0;}
}
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
    console.log(randomNumber);
    if (randomNumber === 1) {computerSelection= "rock";} 
    else if (randomNumber === 2) {computerSelection= "paper";}
    else {computerSelection= "scissors";}
    document.getElementById("computerSelection").innerHTML += computerSelection+ ',';
    return computerSelection;
 } 
 
 //play five rounds

 //declare absolute winner

 
   
 
  
  