const questions = [
  {
    category: "PCo",
    question: "Fav color ?",
    choices: ['Red', 'Black', 'Both'],
    answer: 'Red'
  },
  {
    category: "PCa",
    question: "Fav car ?",
    choices: ['Honda', 'BMW', 'both'],
    answer: 'Honda'
  },
  {
    category: "PB",
    question: "Fav brand ?",
    choices: ['Amazon', 'Google', 'Both'],
    answer: 'Both'
  },
  {
    category: "PF",
    question: "Fav fruit ?",
    choices: ['Apple', 'Grapes', 'Mango'],
    answer: 'Mango'
  },
  {
    category: "PH",
    question: "fav hobby ?",
    choices: ['Singing', 'Coding', 'Both'],
    answer: 'Both'
  }
];

// Returns a random question object
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// Returns a random choice from the given choices array
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// Returns result message
function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

// Example run
const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);
const result = getResults(selectedQuestion, computerChoice);

console.log(selectedQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(result);