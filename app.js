'use strict';

//name prompt
var username = prompt('What is your name?');
alert('Welcome ' + username + ' to my website!');

//Trivia questions from welovequizzes.com

var correct = 'You are correct!';
var wrong = 'You are not correct!';

var wrongGuesses = 0;
var correctGuesses = 0;

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

//6
// Add a 6th question that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// var guessAge = prompt('Using numerical numbers, How old do you think I am?');
// var actualAge = '30';
// console.log('#6', guessAge);

var numGuess = 0;
while (numGuess < 4) {
  var guessAge = prompt('Using numerical numbers, How old do you think I am? You have 4 attempts.');
  var actualAge = '30';
  var attempts = (3 - numGuess) + ' attempts left';
  if (guessAge < actualAge) {
    alert('Guess higher! ' + attempts);
    wrongGuesses++;
  } else if (guessAge > actualAge) {
    alert('Guess lower! ' + attempts);
    wrongGuesses++;
  } else if (guessAge === actualAge){
    alert('Correct!');
    numGuess = 4;
    correctGuesses++;
  } else {
    alert('No more attempts The correct answer is 30!');
    wrongGuesses++;
  }
  numGuess++;
}

//7
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

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


alert('Thank you ' + username + ' for playing my guessing game! You had ' + wrongGuesses + ' wrong guesses and ' + correctGuesses + ' correct guesses!');