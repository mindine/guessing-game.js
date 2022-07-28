const readline = require('readline');


//Guessing game project
//phase one tooHigh? tooLow? whoKnows

let secretNumber = 55; //initializing a variable in the global scope 

//checkGuess

let checkGuess = (number) => {

  if (number > secretNumber) { //output if guess is higher than secretNumber
    console.log(`Too High.`);
    return false;
  }

  else if (number < secretNumber) { //output if guess is lower than secretNumber
    console.log(`Too Low.`);
    return false;
  }

  else {                      //output if guess is correct 
    console.log(`Correct!`);
    return true;
  }

}

//askGuess




