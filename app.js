'use strict';

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

var answer2 = prompt('Does Miya have a cat?');

if (answer2.toUpperCase() === 'Y') {
  alert('Correct. He\'s still a kitten, and super playful.');
  console.log('Correct. He\'s still a kitten, and super playful.');
} else {
  alert('Incorrect.');
  console.log('Incorrect.');
}

var answer3 = prompt('Is Miya\'s cat named Purrmonster?');

if (answer3.toUpperCase() === 'Y') {
  alert('No. It\'s Gryphen. Who names a cat Purrmonster?');
  console.log('No. It\'s Gryphen. Who names a cat Purrmonster?');
} else {
  alert('You\'re right. His name is actually Gryphen.');
  console.log('You\'re right. His name is actually Gryphen.');
}

var answer4 = prompt('Does Miya have a great love for all things food-related?');

if (answer4.toUpperCase() === 'Y') {
  alert('Uh huh. Gimme the food!');
  console.log('Uh huh. Gimme the food!');
} else {
  alert('You\'re right. I actually like starving myself. Builds character.');
  console.log('You\'re right. I actually like starving myself. Builds character.');
}

var answer5 = prompt('Does Miya have a big family?');

if (answer5.toUpperCase() === 'Y') {
  alert('True. I\'m the first of four kids. It was a loud house.');
  console.log('True. I\'m the first of four kids. It was a loud house.');
} else {
  alert('Wrong again! You\'ve got a lot to learn.')
  console.log('True. I\'m the first of four kids. It was a loud house.');
}

var answer6 = prompt('What number indicates how many miles I\'m comfortable running at one time (without stopping)? (Hint: I\'m no marathon runner!) Please enter a numerical value!');

    guess++;
  } else if (answer6 = 3) {
      alert('Correct!');
      console.log('You know me so well. We should be buddies.');
      guess ++;
      break;
  } else (guess = 4)
    alert('No more guesses!');
    console.log('No more guesses!');
    break;
  };

var answer7 = prompt('Can you guess which countries I\'ve been to?');

var countries = ['USA', 'France', 'England', 'Scotland', 'Spain', 'China', 'the Bahamas', 'Canada'];

var guesses = 6;
var tries = 0;

while (tries < 6) {
  if (answer7.toUpperCase() != countries[0] || countries[1] || countries[2] || countries[3] || countries[4] || countries[5] || countries[6] || countries[7]) {
    guesses--;
    tries ++;
    alert('Try again. You have ' + guesses + 'left.' )
    prompt('Can you guess which countries I\'ve been to?');
    console.log('Try again.');
  }  else if (answer7.toUpperCase() = countries[0] || countries[1] || countries[2] || countries[3] || countries[4] || countries[5] || countries[6] || countries[7]) {
    alert('Correct!');
    guesses--;
    tries++;
    break;
}
};

alert('I have gone to the USA, France, England, Scotland, Spain, China, the Bahamas, and Canada.')
console.log('I have gone to the USA, France, England, Scotland, Spain, China, the Bahamas, and Canada.');
