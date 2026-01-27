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