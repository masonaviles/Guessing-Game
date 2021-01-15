'use strict';

//name prompt
var username = prompt('What is your name?');
alert('Welcome ' + username + ' to my website!');

//Trivia questions from welovequizzes.com

var correct = 'You are correct!';
var wrong = 'You are not correct!';

var wrongGuesses = 0;
var correctGuesses = 0;


function albert() {
  //1
  // get answers from prompts
  var albert = prompt('Yes or No: In school, Albert Einstein failed most of the subjects, except for physics and math.');
  console.log('#1. Their answer is ' + albert);
  //yes

  //conditionals
  if(albert.toLowerCase() === 'yes') {
    alert(correct);
    correctGuesses ++;
  } else {
    alert(wrong);
    wrongGuesses ++;
  }
}
albert();


function space() {
  //2
  var space = prompt('Yes or No: The first song ever sung in space was "Happy Birthday"');
  console.log('#2. Their answer is ' + space);
  //yes

  //conditionals
  if(space.toLowerCase() === 'yes') {
    alert(correct);
    correctGuesses++;
  } else {
    alert(wrong);
    wrongGuesses++;
  }
}
space();

function postcards() {
  //3
  var postcards = prompt('Yes or No: The first country in the world to use postcards was the United States of America.');
  console.log('#3. Their answer is ' + postcards);
  //no

  //conditionals
  if(postcards.toLowerCase() === 'no') {
    alert(correct);
    correctGuesses++;
  } else {
    alert(wrong);
    wrongGuesses++;
  }
}
postcards();

function bird() {
  //4
  var bird = prompt('Yes or No: A male canary tends to have a better singing voice than a female canary.');
  console.log('#4. Their answer is ' + bird);
  //yes

  //conditionals
  if(bird.toLowerCase() === 'yes') {
    alert(correct);
    correctGuesses++;
  } else {
    alert(wrong);
    wrongGuesses++;
  }
}
bird();


function tea() {
  //5
  var tea = prompt('Yes or No: Tea contains more caffeine than coffee or soda.')
  console.log('#5. Their answer is ' + tea);
  //no

  //conditionals
  if(tea.toLowerCase() === 'no') {
    alert(correct);
    correctGuesses++;
  } else {
    alert(wrong);
    wrongGuesses++;
  }
}
tea();

//6
// Add a 6th question that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// var numGuess = 0;
// while (numGuess < 4) {
//   var guessAge = prompt('Using numerical numbers, How old do you think I am? You have 4 attempts.');
//   var actualAge = '30';
//   var attempts = (3 - numGuess) + ' attempts left';
//   if (guessAge < actualAge) {
//     alert('Guess higher! ' + attempts);
//     wrongGuesses++;
//   } else if (guessAge > actualAge) {
//     alert('Guess lower! ' + attempts);
//     wrongGuesses++;
//   } else if (guessAge === actualAge){
//     alert('Correct!');
//     numGuess = 4;
//     correctGuesses++;
//   } else {
//     alert('No more attempts The correct answer is 30!');
//     wrongGuesses++;
//   }
//   numGuess++;
// }

//let's turn it into a for loop because why not

function guessAge() {
  for (var i=0; i<4; i++) {
    var guessAge = prompt('Using numerical numbers, How old do you think I am? You have 4 attempts.');
    var actualAge = '30';
    var attempts = (3 - i) + ' attempts left';
    if (guessAge < actualAge) {
      alert('Guess higher! ' + attempts);
      wrongGuesses++;
    } else if (guessAge > actualAge) {
      alert('Guess lower! ' + attempts);
      wrongGuesses++;
    } else if (guessAge === actualAge){
      alert('Correct!');
      correctGuesses++;
      i = 4;
    } else {
      alert('No more attempts The correct answer is 30!');
      wrongGuesses++;
    }
  }
}
guessAge();


//7
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

function colorGuess() {
  var colorGuess = 0;
  var maxColorGuesses = 6;
  while(colorGuess < maxColorGuesses) {
    var guessColors = prompt('What are my colors?');
    var favColors = ['red', 'gold', 'black'];
    var attempts = ((maxColorGuesses - 1) - colorGuess);
    if (favColors.includes(guessColors)) {
      alert('yes! that is one of my colors out of Red, Gold, or Black');
      colorGuess = 6;
      correctGuesses++;
    } else {
      alert('try again! You have ' + attempts + ' attempts left');
      wrongGuesses++;
    }
    colorGuess++;
  }
}
colorGuess();


alert('Thank you ' + username + ' for playing my guessing game! You had ' + wrongGuesses + ' wrong guesses and ' + correctGuesses + ' correct guesses!');

//stretch goals

// Work from collections of like data: Create 3 arrays, one for each of: your questions, the correct answers, and the two possible responses. (The same applies if you’ve added in any other pieces to the questions besides the most basic structure.) Replace that content in the functions by accessing the arrays.

// Make it DRY: Reduce the yes/no questions from five functions to one function, and then use a ‘for’ loop to iterate through the arrays and call the function for each question.

// Code review: Take time to explore each other’s CSS and talk about how it is organized and what it is doing. Make suggestions for how it can be improved. Integrate your partner’s suggestions to improve your own styling.

// Improve accessibility: Collaborate on achieving better scores on accessibility audits. Include a screenshot of your new audit score in your README.md file.
