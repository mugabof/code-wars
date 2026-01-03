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