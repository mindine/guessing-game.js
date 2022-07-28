
//readln module import to be used in this project

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//Guessing game project
//phase one tooHigh? tooLow? whoKnows

let secretNumber = 55; //initializing a variable in the global scope 

//checkGuess

let checkGuess = (number) => {

  let num = Number(number);
  if (num > secretNumber) { //output if guess is higher than secretNumber
    console.log(`Too High.`);
    return false;
  }

  else if (num < secretNumber) { //output if guess is lower than secretNumber
    console.log(`Too Low.`);
    return false;
  }

  else {                      //output if guess is correct 
    console.log(`Correct!`);
    return true;
  }

}

//askGuess

let askGuess = () => {
  rl.question('Enter a guess: ', (answer) => {
    // TODO: Log the answer in a database
    let check = checkGuess(answer);

    if (check) {
      console.log(`You win!`);
      rl.close();
    } else {
      return askGuess();
    }
  });
}

askGuess();


