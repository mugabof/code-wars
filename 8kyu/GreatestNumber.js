//Compare 2 numbers 1st method
let a=10;
let b=10;

if(a>b){
    console.log('The largest number is a:',a);
}
else if(a<b){
    console.log('The largest number is b:',b);
}
else
console.log('Numbers a and b are equal:',a);
//Compare 2 numbers 1st method
console.log('------------------------------');
console.log('         2nd alternative      ');
console.log('------------------------------');

function findLargest(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is the largest integer`);
        return num1;
    } else if (num2 > num1) {
        console.log(`${num2} is the largest integer`);
        return num2;
    } else {
        console.log("Both numbers are equal");
        return num1;
    }
}
findLargest(1567, 325);
// Compare 2 numbers 3rd method
console.log('------------------------------');
console.log('       3rd alternative         ');
console.log('------------------------------');


function findLarge() {
    // Prompt user for input
    let num1 = parseInt(prompt("Enter the first integer:"));
    let num2 = parseInt(prompt("Enter the second integer:"));
    
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid integers");
        return;
    }
    
    // Compare numbers
    if (num1 > num2) {
        console.log(`${num1} is the largest integer`);
        return num1;
    } else if (num2 > num1) {
        console.log(`${num2} is the largest integer`);
        return num2;
    } else {
        console.log("Both numbers are equal");
        return num1;
    }
}

// Call the function to start the program yeahgit 
findLarge();
//--------------------------------------------------------------

var x=3;
var y=-7;
var z=-2;
if (x>0 && y>0 && z>0)
{
       alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          console.log("The sign is -");
        }
        else if (x>0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }