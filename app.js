'use strict';

var username = prompt('What is your name?');
alert('Welcome ' + username + ' to my website!');

var correct = 'You are correct!';
var wrong = 'You are not correct!';

//Trivia questions from welovequizzes.com

//1
// get answers from prompts
var albert = prompt('Yes or No: In school, Albert Einstein failed most of the subjects, except for physics and math.');
console.log('#1. Their answer is ' + albert);
//yes

//conditionals
if(albert.toLowerCase() === 'yes') {
  alert(correct);
} else {
  alert(wrong);
}

//2
var space = prompt('Yes or No: The first song ever sung in space was "Happy Birthday"');
console.log('#2. Their answer is ' + space);
//yes

//conditionals
if(space.toLowerCase() === 'yes') {
  alert(correct);
} else {
  alert(wrong);
}

//3
var postcards = prompt('Yes or No: The first country in the world to use postcards was the United States of America.');
console.log('#3. Their answer is ' + postcards);
//no

//conditionals
if(postcards.toLowerCase() === 'no') {
  alert(correct);
} else {
  alert(wrong);
}

//4
var bird = prompt('Yes or No: A male canary tends to have a better singing voice than a female canary.');
console.log('#4. Their answer is ' + bird);
//yes

//conditionals
if(bird.toLowerCase() === 'yes') {
  alert(correct);
} else {
  alert(wrong);
}

//5
var tea = prompt('Yes or No: Tea contains more caffeine than coffee or soda.')
console.log('#5. Their answer is ' + tea);
//no

//conditionals
if(tea.toLowerCase() === 'no') {
  alert(correct);
} else {
  alert(wrong);
}

alert('Thank you ' + username + ' for playing my guessing game!');