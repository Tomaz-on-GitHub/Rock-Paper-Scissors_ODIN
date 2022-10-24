"use strict";
//console.log("Script file connected");

//start by adding listerens to objects
const keys = document.querySelectorAll('.key');
// we use the .forEach method to iterate through each button
keys.forEach((key) => { key.addEventListener('click', function (e) { playRound(e.target.id)})});
// additional listerner to remove transition after the player selection
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
} 

//take care of changing the player's name
document.getElementById("playerName").onclick = function(e) {
  //e.stopPropagation();
  const listContent = prompt('Enter new players name');
  document.getElementById("playerName").textContent = listContent;
}


//initialize counters
let player=0; //initial number of points of human player
let comp=0;
let round=0; //it is the zero round played
let currentWin = 0; //here statuso of current play will be saved;

/*
function myGame1()  {
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
*/
//three steps of single round (function playRound)
//playRound();
function playRound(playerSelection) {
    // your code here!
    //1. get input from player (person)
    //console.log("player choice: " +  playerSelection );
    //document.getElementById("playerSelection").innerText += playerSelection + ',';
    
    //2. get input from computer (script)
    let computerSelection = getComputerChoice();
    //console.log("computer choice: " + computerSelection);
    //document.getElementById("computerSelection").innerText += computerSelection+ ',';
    //3. compare both inputs (suppose they are valid!), declare winner ,count points
    if (playerSelection !== 0 && computerSelection !== 0 ) 
    { //valid results only
        if (computerSelection === playerSelection) {
            //both are equal, there is no winner
            //console.log("same selection");
            player +=0;
            comp +=0;
            currentWin="even"  //make the color appropriately
        } else if (computerSelection == "paper" && playerSelection =="rock"){
            comp +=1;
           // console.log("comp wins: " + comp);
            currentWin="lose" 
        } else if (computerSelection == "scissors" && playerSelection =="paper"){
            comp +=1;
           // console.log("comp wins: " + comp); 
            currentWin="lose"
        } else if (computerSelection == "rock" && playerSelection =="scissors"){
            comp +=1;
           // console.log("comp wins: " + comp);
            currentWin="lose" 
             
        } else {
            player +=1;
           // console.log("player wins: " + player);
            currentWin="win"
            
        }
    }

    //write the round and current results:
    round++; //we add to the round
    showRoundWinner(currentWin);
    document.getElementById("round1").innerHTML = "Round: " + round ;
    //show the selected button
    document.getElementById(playerSelection).classList.add('playing');
    document.getElementById(computerSelection + "C").classList.add('playing');

    if (player===5 || comp===5) setTimeout(declareWinner, 100);
   // document.getElementById("result1").innerHTML = currentWin + "(points:" + player + ")";
   
   
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

 //declare round winner (on page)
  function showRoundWinner(winner)
  {
    //winner possibilites:even, lose, win (perspective of human player)
    if (winner==="even") {document.getElementById("playerH").style.backgroundColor ="orange";}
    if (winner==="win") {document.getElementById("playerH").style.backgroundColor ="green";}
    if (winner==="lose") {document.getElementById("playerH").style.backgroundColor ="red";}
    if (winner==="even") {document.getElementById("playerC").style.backgroundColor ="orange";}
    if (winner==="win") {document.getElementById("playerC").style.backgroundColor ="red";}
    if (winner==="lose") {document.getElementById("playerC").style.backgroundColor ="green";}
    if (player !== 0) {
    document.getElementById("resultPlayer").innerText= player;
    document.getElementById("resultPlayer").style.height=(player/5)*100 + "%";
    }
    if (comp !== 0) {
    document.getElementById("resultComputer").innerText=comp;
    document.getElementById("resultComputer").style.height=(comp/5)*100 + "%";
    //console.log("winner" + winner);
    }
  };

 
  function declareWinner()  //declare winner
    {
        if (player>comp) {
           // console.log("you win! Good job!")
           // document.getElementById("result1").innerHTML= 
           alert(" you win! Good job!");
           location.reload();
           // document.getElementById("result1").style.backgroundColor ="green";
            }
        
        else {
           // console.log("you lose!")
           alert(" you lose! ");
           location.reload();
           // document.getElementById("result1").innerHTML= " you lose! "
           // document.getElementById("result1").style.backgroundColor ="red";
            }

            //put all counters to zero
            player=0; //initial number of points of human player
            comp=0;
            round=0; //it is the zero round played
            currentWin = 0; //here statuso of current play will be saved;
           // document.getElementById("result1").innerHTML=""
           // document.getElementById("result1").style.backgroundColor ="white";
          //  document.getElementById("playerSelection").innerText = "";
          //  document.getElementById("computerSelection").innerText = "";
   // }
    //if this is the 6th round, than this is a new game (reset everything and start new)...
   // if (round===6) {
   //     location.reload();
  //  }
    //console.log(playRound(playerSelection, computerSelection));
    }

    
   
 
  
  