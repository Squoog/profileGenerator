const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionsList = {
  0:'What is your name? ',
  1:'What is an activity you like doing? ',
  2:'What do you listen to while you do that? ',
  3:'Which meal is your favourite? ',
  4:'What is your favourite thing to eat for that meal? ',
  5:'What is your absolute favourite sport? ',
  6:'What is your superpower? '
};

const answers = {};

let iterator = 0;

const ask = function() {
  if (iterator < 7) {
    r1.question(`${questionsList[iterator]}\n`, (answer) => {
      answers[iterator] = answer;
      iterator++;
      console.log();
      ask();
    });


  } else {
    r1.close();
    console.log("Please find your new profile below:\n");
    setTimeout(() => console.log(`${answers[0] } enjoys ${answers[1]} while listening to ${answers[2]}. Their favourite meal is ${answers[3]}, where they like to eat ${answers[4]}. Their absolute favourite sport is ${answers[5]}. Their superpower is ${answers[6]}!`), 2000);
  }
};

ask();