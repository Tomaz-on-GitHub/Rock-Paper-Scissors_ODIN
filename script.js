console.log("Script file connected");
//there are 5 rounds,
//three steps of single round

//1. get input from player (person)

function myFunction(argument) {
    let person = prompt("Please confirm your selection" ,argument);
    if (person != null) {
      document.getElementById("lastResult").innerHTML += person;
    }
  }

 //2. get input from computer (script)
 
 //3. compare both inputs, declare winner

 //play five rounds
 
 //declare absolute winner