function randomInt(n) {
  // returns a random number multiplyed by what we input plus 1 so it starts from 1 to what we input
  return Math.floor(Math.random() * n) + 1;
}

function parseInputNum(string) {
  // if the input string is empty, return Not a number
  if (string === '') {
    return NaN;
  } else if (string === null) {
    //if we cancel on the site, returns null
    return null;
  } else {
    // if neither above conditions are met, returns the input string as a number/Integer.
    return Number(string);
  }
}

function promptInt(message) {
  // we assign the input from parseInput func to convert to an INT
  let number = parseInputNum(prompt(message));
  // we are checking to see if the users input is a number/int AND if it is not Null!
  while (!Number.isInteger(number) && number !== null) {
    // prompting user to try again by entering an integer, if met, code will break out of while loop, and recheck with parse Input Func
    number = parseInputNum(prompt('Please enter an Integer: '));
  }
  // returns an Int to Func
  return number;
}

function play() {
  // calls the randomInt function to assign a random number between 1 and what we set.
  const secretNum = randomInt(20);

  // make sure to check if there is an input for USERNAME, if not, ask to retry.
  let userName = prompt('Welcome, please type your name: ');

  //assign the user prompt to guess variable and stores as Int with PromptInt Func
  let guess = promptInt(`Guess a number, ${userName}: `);
  // assignes guess users makes to guesses array variable.
  let guesses = [guess];
  // while the guess is not exactly met yet with secret number, this loop will constantly be runnning.
  while (guess !== secretNum) {
    if (guess === null) {
      alert(`Goodbye, ${userName}!`);
      return;
    }
    //Checks if users guess is less or greater than secret Number, if so prompt user respectivly
    if (guess < secretNum) {
      guess = promptInt(`Guess higher ${userName}: `);
    } else if (guess > secretNum) {
      guess = promptInt(`Guess lower ${userName}: `);
    }
    // Pushes each guess into the Guesses Array.
    guesses.push(guess);
  }
  // when While loops exit, will alert User
  alert(`Correct, ${userName}! Your previous attempts were: ${guesses}.`);
}

// calling the function to start the logic.
play();