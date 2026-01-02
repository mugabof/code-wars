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

const crypticKey1= Symbol("saltNpepper");
const crypticKey2= Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2);