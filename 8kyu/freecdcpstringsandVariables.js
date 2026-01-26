console.log("Hi there!");
console.log("I am excited to talk to you.");
let bot;
bot = "teacherBot";

let botLocation = "the universe";

console.log("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

// Build a Senetece Maker
let adjective = "black";
let noun = "man";
let verb = "done";
let place= "forest";
let adjective2 = "good" ;
let noun2= "bird";
let firstStory="Once upon a time, there was a(n) "+ adjective +" " + noun + " who loved to eat "+ noun2 + ". The "+ noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " +verb + ".";
console.log("First story: " + firstStory);

 adjective = "white";
 noun = "person";
 verb = "gone";
 place= "river";
 adjective2 = "bad" ;
 noun2= "fish";

 let secondStory="Once upon a time, there was a(n) "+ adjective +" " + noun + " who loved to eat "+ noun2 + ". The "+ noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " +verb + ".";
console.log("Second story: " + secondStory);
// We have different datatypes: String, number, boolean, object,null, undefined, symbol,bigInt
const crypticKey1= Symbol("saltNpepper");
const crypticKey2= Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2);
console.log(typeof noun2); console.log(typeof null);//object
// Bracket annotation
let greeting = "Carter";
console.log(greeting[1]); // "e"
console.log(greeting[greeting.length - 1]);// last character
let firstTwo = greeting[0] + greeting[1]; // "Ca"
console.log(firstTwo);
//How Do You Create a Newline in Strings and Escape Strings?
//1
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
//2
let statement = "She said, \"Hello!\""; //instead of let statement = "She said, "Hello!"";
console.log(statement);
let quote = 'It\'s a beautiful day!';
console.log(quote); // It's a beautiful day!
/*What Are Template Literals, and What Is String Interpolation? You use `(backticks), 
including embedding variables directly inside a string, a feature known as string 
interpolation.Another great feature of template literals is that they support multiline strings. 
With regular strings, you would need to use escape characters (\n) to create new lines. With template literals, you can simply write the string across multiple lines, and the formatting is preserved:*/
//1. Template literals
const names = "Alice";
const greetings = `Hello, ${names}!`;
console.log(greetings);
//2.
const nm = "Alice";
const ag = 25;
const message = "My name is " + nm + " and I am " + ag + " years old.";
console.log(message); 
//alternative 
const nam = "Alice";
const ages = 25;
const messages = `My name is ${nam} and I am ${ages} years old.`;
console.log(message); 
/*3.Another great feature of template literals is that they support multiline strings. With regular strings, you would need to use escape characters (\n) to create new lines. 
With template literals, you can simply write the string across multiple lines, and the formatting is preserved:*/

let poet = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poet);
/* How Can You Find the Position of a Substring in a String? If the substring is found, indexOf() returns the index (or position)
 If the substring is not found, indexOf() returns -1, which indicates that the search was unsuccessful.*/
let sentence = "JavaScript is awesome and JavaScript is powerful!";
let position = sentence.indexOf("awesome");
let position2 = sentence.indexOf("fantastic");
let position3 = sentence.indexOf("JavaScript",10); // You can also specify where to begin searching within the string
console.log(`Position of Substring awesome is: ${position}`);
console.log(`Position of Substring Fantastic is: ${position2}`);
console.log(`Position of Substring Javascript is: ${position3}`);

//Prompt() method  It’s one of the simplest ways to get input from a user through a small pop-up dialog box

//What Is ASCII, and How Does It Work with charCodeAt() and fromCharCode()?
let letter = "B";
console.log(letter.charCodeAt(0));  // 65
let symbol = "!";
console.log(symbol.charCodeAt(0));  // 33
let char = String.fromCharCode(65);
console.log(char); //A
//Extract a Substring from a String? string.slice(startIndex, endIndex);
let messagee = "Hello, world!";
let greetingi = messagee.slice(0, 5);

console.log(greetingi);

const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

const messaage = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

const platform = messaage.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = messaage.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

const endPunctuation = messaage.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log("Workshop complete! You now know how to use includes() and slice().");
/* How Can You Change the Casing for a String? toUperCase(), toLowerCase()
*/
let greetin = "Hello, World!";
let uppercaseGreeting = greetin.toUpperCase();
let lowercaseGreeting = greetin.toLocaleLowerCase();
console.log(`${uppercaseGreeting} and ${lowercaseGreeting}`);
/* Trim Whitespace from a String: trim(), trimStart(), and trimEnd()
*/
let msg = "   Hello!   ";
console.log(msg.trim());
console.log(msg.trimStart() + "Carter");
console.log(msg.trimEnd());
//combine and Build a String Formatter freeCodeCamp

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) +" "+ lowercaseWord[5].toUpperCase() +" "+ lowercaseWord.slice(-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);

//Replace Parts of a String with Another: string.replace(searchValue, newValue);,string.replaceAll(searchValue, newValue);
let text = "I love JavaScript!";
console.log(text.replace("JavaScript","Coding"));

// Repeat a String x Number of Times: string.repeat(x)
let word = "Carter Mugabo! ";
console.log( word.repeat(7));
// Build a String Transformer

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
// Math RAndom
let mathematics = Math.random();
console.log(`Random number= ${mathematics}`);
// All function goes with math buil in object
console.log("Smallest number:"+ Math.min(1, 5, 3, 9)); //return smallest nbr
console.log("Largest number:"+ Math.max(1, 5, 3, 9)); // return the largest number
console.log("Ceiled number:"+ Math.ceil(4.3)); // 4
console.log("Floored  number:"+ Math.floor(4.3)); // 5
//Example
const maxi = 10;
const mini = 5;
const randomn=Math.random();
const randomNum1 = Math.floor(randomn * (maxi - mini + 1)) + mini;
console.log("First Random Number is:" + randomn)
console.log("randomNum= :" + randomNum1);
// Random Number between 1 and 20
const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log("random number between 20 and 1 "+randomNumBtw1And20);
// Math.trunc() removes the decimal part of a number, returning only the integer portion, without rounding
console.log("Trunced number" + Math.trunc(2.9)); // 2
console.log("Trunced number" + Math.trunc(9.1)); // 9

//If you need to get the square root or cube root of a number,use the Math.sqrt() and Math.cbrt() methods

console.log("Square root of 81 is " + Math.sqrt(81)); // 9
console.log("Cubic root of 27 is " + Math.cbrt(27));
// Use Math.abs() method to find absolute value of a number

console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5

//Math.pow() takes two numbers and raise the first to the power of the second.

console.log(" 100 ^ 10 ="+ Math.pow(100, 10)); // 100000000000000000000
console.log(" 8 ^ 2 ="+ Math.pow(8, 2)); // 64
// Exercises Build a MathBot
const botName = "MathBot";
const greetingss = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greetingss);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);

const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

const maxNum=Math.max(3,125,55,24);
console.log(maxNum);
const minNum= Math.min(6,90,14,90,2);
console.log(minNum);
console.log("It was fun learning about the different Math methods with you!");
// Build a Fortune Teller



const fortune1="Your cat will look very cuddly today."
const fortune2="The weather will be nice tomorrow."
const fortune3="Be cautious of your new neighbours."
const fortune4="You will find a new hobby soon."
const fortune5="It would be wise to avoid the color red today."

let randomNumber= Math.floor (Math.random() *(5-1)+1);
let selectedFortune;

  if (randomNumber === 1){
    selectedFortune = fortune1;
  } 
  else if (randomNumber=== 2){
    selectedFortune = fortune2;
  } 
  else if (randomNumber=== 3){
    selectedFortune = fortune3;
  } 
  else if (randomNumber=== 4){
    selectedFortune = fortune4;
  } 
  else if (randomNumber=== 5){
    selectedFortune = fortune5;
  }
  console.log(`Random number is ${randomNumber}`);
  console.log(selectedFortune);



