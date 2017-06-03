'use strict';

function myGuessingGameWhereFromIfElseLogic ()= {

var user = prompt('What is your name?');
console.log('The user\'s name is: ' + user);alert('Hello, ' + user + '. I\'m going to ask you a question.');
var answer1 = prompt(user + ' this is a yes or no question, so please answer with a Y or N. Did Miya come to Seattle from Florida 4 years');
if (answer1.toUpperCase() === 'Y') {
  alert('Wrong. Try again. Or don\'t.... It\'s your choice.');
  console.log('Wrong. Try again. Or don\'t.... It\'s your choice.');
} else {
  alert('Correct, I\'ve been here for almost three years.');
  console.log('Correct, I\'ve been here for almost three years.');
}
}
myGuessingGameWhereFromIfElseLogic();


function myGuessingGameCatIfElseLogic () = {
var answer2 = prompt('Does Miya have a cat?');

if (answer2.toUpperCase() === 'Y') {
  alert('Correct. He\'s still a kitten, and super playful.');
  console.log('Correct. He\'s still a kitten, and super playful.');
} else {
  alert('Incorrect.');
  console.log('Incorrect.');
}
}
myGuessingGameCatIfElseLogic();

function myGuessingGameCatNameLogicIfElse() = {
var answer3 = prompt('Is Miya\'s cat named Purrmonster?');

if (answer3.toUpperCase() === 'Y') {
  alert('No. It\'s Gryphen. Who names a cat Purrmonster?');
  console.log('No. It\'s Gryphen. Who names a cat Purrmonster?');
} else {
  alert('You\'re right. His name is actually Gryphen.');
  console.log('You\'re right. His name is actually Gryphen.');
}
}
myGuessingGameCatNameLogicIfElse();

function myGuessingGameFoodLogic()= {
var answer4 = prompt('Does Miya have a great love for all things food-related?');

if (answer4.toUpperCase() === 'Y') {
  alert('Uh huh. Gimme the food!');
  console.log('Uh huh. Gimme the food!');
} else {
  alert('You\'re right. I actually like starving myself. Builds character.');
  console.log('You\'re right. I actually like starving myself. Builds character.');
}
}

myGuessingGameFoodLogic();

function myGuessingGameFamilyLogic() = {
var answer5 = prompt('Does Miya have a big family?');

if (answer5.toUpperCase() === 'Y') {
  alert('True. I\'m the first of four kids. It was a loud house.');
  console.log('True. I\'m the first of four kids. It was a loud house.');
} else {
  alert('Wrong again! You\'ve got a lot to learn.')
  console.log('True. I\'m the first of four kids. It was a loud house.');
}
}

myGuessingGameFamilyLogic();

function myGuessingGameRunning() = {
var answer6 = prompt('What number indicates how many miles I\'m comfortable running at one time (without stopping)? (Hint: I\'m no marathon runner!) Please enter a numerical value!');

var guess = 0;

for (i=0; i<3; i++){


if (answer6 == 3) {
  alert('Correct!');
  correct ++;

  break;
} else if (answer6 < 3) {
  answer6 = prompt('Too low!');
  guess++;
} else {
 answer6 = prompt('Too high!');
  guess++;
}
}
alert('You are out of guesses!');
};
  // if (guess = 4){
  //   alert("no more guess");
  //   break;
  // }
}
myGuessingGameRunning();

function myGuessingGameCountriesVisitedLogic () {
var answer7 = prompt('Can you guess which countries I\'ve been to?');

var myCountries = ['USA', 'FRANCE', 'ENGLAND', 'SCOTLAND', 'SPAIN', 'CHINA', 'THE BAHAMAS', 'CANADA'];

var userAnswerCountries = [];
var guess = 0;

while (guess < 6) {
  var userSixAnswersCountriesIVisited = prompt('Can you guess which countries I\'ve been to?');
  userSixAnswersCountriesIVisited.push(userAnswerCountries);
  guess ++;
}

for(var i = 0; i < myCountries.length; i++){
  document.write(myCountries[i]);
  for(var j = 0; j < userAnswerCountries.length; j++){
    document.write(userAnswerCountries[j]);

    if(myCountries[i] === userAnswerCountries[j]){
      alert('Your answer match! You are a mind reader!');
      correct ++;
      document.write('Match: ' + myCountries[i]);
    }
  }
}

}

myGuessingGameCountriesVisitedLogic();
