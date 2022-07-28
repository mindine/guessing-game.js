
//readln module import to be used in this project

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//Guessing game project
//phase one tooHigh? tooLow? whoKnows

let secretNumber = randomInRange(0, 100); //initializing a variable in the global scope 
let numAttempts = 2;                       //initializing a variable number of guessing attempts in the global scope

//checkGuess function

function checkGuess(number) {

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

//askGuess function

function askGuess() {
  if (numAttempts === 0) {    //when number of attempts gets to 0 print out game over message and exit game

    rl.question(`Enter your name: `, (answer0) => {
      console.log(`----${answer0.toUpperCase()} YOU LOSE!!---- <<===>> ----GAME OVER!!!----`);
      rl.close();
    })

  }

  rl.question('Enter a guess: ', (answer) => {
    // TODO: Log the answer in a database
    let check = checkGuess(answer);

    if (check) {
      console.log(`You win!`);
      rl.close();
    } else {
      numAttempts--;
      return askGuess();
    }
  });
}



//randomInRange function

function randomInRange(min, max) {

  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min); //the max and min are inclusive;

}

//askRange function

function askRange(min, max) {

  rl.question('Enter a min number: ', (answer1) => {
    // TODO: Log the answer in a database
    if (answer1 >= 0 || answer1 < 0) {                   //condition to ask for max number if and postive or negative number as been chosen for min number
      rl.question(`Enter a max number: `, (answer2) => {
        console.log(`I am thinking of a number between ${answer1} and ${answer2}...`);
        secretNumber = randomInRange(answer1, answer2); //set secretNumber to min and max given by user
        askGuess();                                     //run guess function to find the random secret number once found exit game
      })
    }
  });

}

//askLimit function 

function askLimit(num) {
  rl.question(`Enter number of Attempts: `, (answer3) => {
    numAttempts = Number(answer3);             //reassign number of attempts to the value determined by user
    askRange();                                //run the askRange function to execute the rest of the game
  })

}

askLimit();    //run asklimit function to start the game
