let players = {};
console.log(players);

function play() {
  let playerName = prompt('Please enter your name:');
  console.log(`name: ${playerName}`);

  if (playerName === null) {
    alert(`Goodbye!`);
    console.log('I Ran!');
    return;
  }

  let number = Number(
    prompt(`enter a number between 1 - 20, ${playerName}.`)
  );

  console.log(`number: ${number}`);

  let randNum = Math.floor(Math.random() * 20 + 1);
  console.log(`secret num: ${randNum}`);

  let guess = 0;
  let prevAttempt = [];

  while (number !== randNum) {
    if (number > randNum) {
      console.log(`number: ${number}, Secret Number: ${randNum}`);
      prevAttempt.push(number);
      guess += 1;
      console.log(`Guess: ${guess}`);
      console.log(`previous guess: ${prevAttempt}`);
      number = Number(prompt(`Guess lower: ${playerName}`));
    } else if (number < randNum) {
      console.log(`number: ${number} , Secret Number: ${randNum}`);
      prevAttempt.push(number);
      guess += 1;
      console.log(`guess: ${guess}: `);
      console.log(`previous attempt: ${prevAttempt}`);
      number = Number(prompt(`Guess higher ${playerName}: `));
    }

    if (!Number.isInteger(number)) {
      number = Number(prompt('please enter a valid number: '));
    }
  }
  guess++;
  var finalCount = guess;
  console.log(`Player: ${playerName}, finalcount: ${finalCount}`);
  scoreBoard(playerName, finalCount);
  playAgain();
}
function playAgain() {
  //variables inside other functions cannot be called within here...unless they are global
  let response = prompt(`Correct! Want to play again?`);

  if (
    response.toLowerCase() === 'y' ||
    response.toLowerCase() === 'yes'
  ) {
    play();
  } else {
    alert(`goodbye!`);
  }
}

function scoreBoard(playerName, finalCount) {
  //is there anyone else named Bob?
  if (!players[playerName]) {
    players[playerName] = finalCount;
  } else if (players[playerName] <= finalCount) {
    //Bob: 7, 2
    //the alert needs to state the difference
    let diffMore = finalCount - players[playerName]; //1
    if (diffMore === 0) {
      console.log(`Score Board: ${JSON.stringify(players)}`);
      alert(`You tied your previous high score`);
    } else {
      console.log(`Score Board: ${JSON.stringify(players)}`);
      alert(
        `correct, you didnt beat your previous score by ${diffMore} points!`
      );
    }
  } else if (players[playerName] > finalCount) {
    let diffLess = players[playerName] - finalCount; //5
    players[playerName] = finalCount; //replacing the old score was 7 and now you are saying to make it 2 {Bob: 7} change 7 to 2 and now the object {Bob:2}
    console.log(`Score Board: ${JSON.stringify(players)}`);
    //index of an object player[playerName]= 3 because your saying the key is Bob in player, whats the value?
    alert(
      `correct, you beat your previous score by ${diffLess} points!`
    );
  }
}

play();
