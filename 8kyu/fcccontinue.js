// Use of Switch() ...Case....Break; Default

const dayOfWeek="Wednesday";
switch(dayOfWeek){
  case 'Monday': 
  console.log('What a bad day!!')
  break;
   case 'Tuesday': 
  console.log('What a Fuck!!')
  break;
   case 'Wednesday': 
  console.log('Today at least we gonna pray!!')
  break;
   case 'Thursday': 
  console.log('What a Useless day!!')
  break;
   case 'Friday': 
  console.log('What a good day we hang out to the club!!')
  break;
   case 'Saturday': 
  console.log('What an unusual day!!')
  break;
   case 'Sunday': 
  console.log('Last day of week, we expect a lot of fun tonight!!')
  break;
  default:
  console.log('Excellent we no have day today uhhhhh!!!')
}
// Dealing with Functions now 


function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Carter"); // Hello, Alice!
greet("Alice"); // Hello, Nick!
// Use of return in Funmction

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(100,234));
// An anonymous function is a function without a name that can be assigned to a variable like this:

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7

//Functions support default parameters, allowing you to set default values for parameters. These default values are used if the function is called without an argument for that parameter. Here's an example:

function greetings(name = "Mugabo") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!

//Arrow Functions 

const calculateArea = (width, height) => {
  return width * height;
}; 

console.log("to calulate area using Arrow func:" + calculateArea(5, 3)); // 15 and can be put into one line: const calculateArea = (width, height) => width * height;

//Build a Calculator with Functions
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));


function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));

console.log("**********************************************************");           
//Build a Boolean check Function FCC

function booWhoo(argument){
  return typeof argument==="boolean";
}
console.log(booWhoo(true));
console.log(booWhoo(false));
console.log(booWhoo([1,2,3]));
console.log(booWhoo([].slice));
console.log(booWhoo({ "a": 1 }));
console.log(booWhoo(1));
console.log(booWhoo("a"));
console.log(booWhoo("true"));
console.log(booWhoo("false"));
console.log("**********************************************************");
// *****Project of masking an email

function maskEmail(email) {
  // Find the position of the "@" symbol
  const atIndex = email.indexOf('@');
  
  // Separate the username and the domain
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  // Mask the username by keeping the first character and replacing the rest with asterisks
  const maskedUsername = username[0] + '*'.repeat(username.length - 2) + username[username.length - 1];

  // Return the masked email by combining the masked username with the domain
  return maskedUsername + domain;
}
let email="mugabofranc1997@gmail.com"
// Test cases
console.log(maskEmail(email));  // Output: "a*******e@example.com"
console.log(maskEmail("freecodecamp@example.com"));  // Output: "f**********p@example.com"
console.log(maskEmail("info@test.dev"));  // Output: "i**o@test.dev"
console.log(maskEmail("user@domain.org"));  // Output: "u**r@domain.org"
console.log(maskEmail("francois.mugabo@algorithm.rw"));
console.log("**********************************************************");

//Build a Loan Qualification Maker

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

const duplexLoanMsg=getLoanMessage(85000, 850);
const condoLoanMsg=getLoanMessage(65000, 690);
const carLoanMsg=getLoanMessage(45000, 660);
const noLoanMsg=getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
console.log(getLoanMessage(10000000, 700));
console.log("***************************NEXT TOPIC*******************************");

// Function that convert degree in Celsius into Fahrenheit
function convertCtoF(celsius){
  let fahrenheit = celsius * (9/5)+32;
  return fahrenheit;
}
console.log ("In Fahrenheit is:"+ convertCtoF(30));

console.log("***************************NEXT TOPIC*******************************");
//Build a card Counting Assistant Mine
let counti=0;
function cardCounterr(card){
if(card>=2 && card<=10 ){
  return card;
}
else
{
  return `"${card}"`}
}
counti=3
console.log(cardCounterr(counti))

// Real One 
let count = 0;
const cardCounter = card => {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >=7 && card <=9) {
    count;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
   count--; 
  }

  if (count > 0) {
    return `${count} Bet`
  } else if (count <= 0) {
    return `${count} Hold`
  }
}
console.log(cardCounter(10));
console.log(cardCounter(3));
console.log(cardCounter(4));
console.log(cardCounter(5));
console.log(cardCounter(6));
console.log(cardCounter(7));
console.log(cardCounter(8));
console.log(cardCounter(9));
console.log(cardCounter("J"));

console.log("***************************NEXT TOPIC*******************************");

// Leap year Calculator
// Function to check if a year is a leap year
function isLeapYear(year) {
  // Check if the year is divisible by 4
  if (year % 4 === 0) {
    // If the year is divisible by 100, it's not a leap year unless it's divisible by 400
    if (year % 100 === 0) {
      // If divisible by 400, it's a leap year
      if (year % 400 === 0) {
        return `${year} is a leap year.`;
      } else {
        return `${year} is not a leap year.`;
      }
    } else {
      return `${year} is a leap year.`;
    }
  } else {
    return `${year} is not a leap year.`;
  }
}

// Declare a variable year
let year = 1900; // Example year

// Call the isLeapYear function and store the result
let result = isLeapYear(year);

// Output the result to the console
console.log(result);


console.log("***************************NEXT TOPIC*******************************");

//Implement Truncate a string Algorithm
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
    } 
    else {
    return str.slice(0, num) + "...";
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2) );

console.log("***************************NEXT TOPIC*******************************");
//Build Confirm ending Tool
function confirmEnding(str, target) {
  // Get the last target.length characters from str and compare
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));

console.log("***************************NEXT TOPIC*******************************");
// Reverse a String 
function reverseString(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i];
    }

    return reversed;
}

// Example usage
let word = "CARTER MUGABO";
let igisubizo = reverseString(word);

console.log("Reversed String CARTER MUGABO:" +igisubizo);// OBAGUM RETRAC

console.log("***************************NEXT TOPIC*******************************");
// Lemme Use Reverse Function  I use Split(),Reverse(),Join();

let ijambo ="My Best friend is Moise is it true?";
let nsiplittingeIjambo=ijambo.split("");
let reversedStringiNoneho=nsiplittingeIjambo.reverse();
console.log("String iri Splitted ariko idahuje:  " + reversedStringiNoneho);

let biveMuriArrayBibeIjamboRimwe=reversedStringiNoneho.join("");
console.log("Noneho dore String Ifatanye:  "+ biveMuriArrayBibeIjamboRimwe);

console.log("***************************NEXT TOPIC*******************************");
//Build a shopping list using array
console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";
console.log(getShoppingListMsg(shoppingList));


console.log("***************************NEXT TOPIC*******************************");
// Build a lunch picker program
let lunches = [];

function addLunchToEnd(lunches, str) {
  let newArr = lunches.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return lunches;
}
console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));


function addLunchToStart(lunches, str) {
  let newArr = lunches.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunches;
}
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

function removeLastLunch(lunches) {
  let newArr = lunches.pop();
  if(lunches.length === 0) {
    console.log("No lunches to remove.")
  }
  else{
  console.log(`${newArr} removed from the end of the lunch menu.`);
  }
  return lunches;
}


function removeFirstLunch(lunches) {
  let newArr = lunches.shift();
    if(lunches.length === 0) {
    console.log("No lunches to remove.")
  }
  else{
    console.log(`${newArr} removed from the start of the lunch menu.`);
  }
  return lunches;
}


function getRandomLunch(lunches) {
  let randomNum = Math.floor(Math.random() * lunches.length);
  let randomElement = lunches[randomNum];
  
  if(lunches.length === 0) {
    console.log("No lunches available.")
  }
  else{
    console.log(`Randomly selected lunch: ${randomElement}`);
  }
}


function showLunchMenu(lunchMenu) {
  // Check if the array is empty
  if (lunchMenu.length === 0) {
    console.log("The menu is empty.");
  } else {
    // Join the array into a string and display the menu
    console.log("Menu items: " + lunchMenu.join(", "));
  }
}

//showLunchMenu([]);
showLunchMenu(["Greens", "Corns", "Beans"]);
console.log("***************************NEXT TOPIC*******************************");
//Build a Golf Score Translator
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, stroke) {

if (stroke === 1) return names[0];
else if (stroke <= par-2) return names[1];
else if (stroke === par-1) return names[2];
else if (stroke === par) return names[3];
else if (stroke === par+1) return names[4];
else if (stroke === par+2) return names[5];
else if (stroke >= par+3) return names[6];
}

console.log(golfScore(1, 1));
console.log(golfScore(2, 1));
console.log(golfScore(3, 2));
console.log(golfScore(5, 5));
console.log(golfScore(5, 1));
console.log(golfScore(5, 2));
console.log(golfScore(4, 5));
console.log(golfScore(4, 8));

console.log("***************************NEXT TOPIC*******************************");

console.log("***************************NEXT TOPIC*******************************");
console.log("***************************NEXT TOPIC*******************************");
console.log("***************************NEXT TOPIC*******************************");
console.log("***************************NEXT TOPIC*******************************");
console.log("***************************NEXT TOPIC*******************************");
console.log("***************************NEXT TOPIC*******************************");
console.log("***************************NEXT TOPIC*******************************");

