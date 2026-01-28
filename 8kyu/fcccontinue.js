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
