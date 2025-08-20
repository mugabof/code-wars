/*Write a function named helloWorld that:
takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.*/
// Using If Condition 

function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}
console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));
console.log('---------------Now lets use Case----------------')

// Use Case function 

function helloWorld(lang) {
  switch (lang) {
    case "es": // Spanish
      return "¡Hola, Mundo!";
    case "de": // German
      return "Hallo, Welt!";
    case "fr": // French
      return "Bonjour, le monde!";
    default: // English
      return "Hello, World!";
  }
}

// Test calls
console.log(helloWorld("en")); // English
console.log(helloWorld("es")); // Spanish
console.log(helloWorld("de")); // German
console.log(helloWorld("fr")); // French
console.log(helloWorld("jp")); // Not supported -> defaults to English

console.log('---------------Now Grading Function----------------')


/* 
   Function: assignGrade
   Description: Takes a numeric score and returns a grade (A–F).
   Rules:
   - 90 and above = A
   - 80–89 = B
   - 70–79 = C
   - 60–69 = D
   - below 60 = F
*/

function assignGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/* 
   Test calls to verify the function works correctly
*/
console.log("Score 95: Grade " + assignGrade(95)); // A
console.log("Score 82: Grade " + assignGrade(82)); // B
console.log("Score 74: Grade " + assignGrade(74)); // C
console.log("Score 67: Grade " + assignGrade(67)); // D
console.log("Score 50: Grade " + assignGrade(50)); // F


const readline = require("readline");          // 1) Import Node's built-in "readline" module for reading user input from the terminal.

/* Function to assign grade */
function assignGrade(score) {                   // 2) Define a function that takes a numeric score.
  if (score >= 90) return "A";                  // 3) If score is 90 or more, return "A".
  else if (score >= 80) return "B";             // 4) Else if 80–89, return "B".
  else if (score >= 70) return "C";             // 5) Else if 70–79, return "C".
  else if (score >= 60) return "D";             // 6) Else if 60–69, return "D".
  else return "F";                              // 7) Otherwise (below 60), return "F".
}

const rl = readline.createInterface({           // 8) Create an interactive input/output interface.
  input: process.stdin,                         // 9) Read from standard input (keyboard).
  output: process.stdout                        // 10) Write prompts and messages to standard output (terminal).
});

/* Function to repeatedly ask user */
function askForScore() {                        // 11) Define a function that asks for a score, handles it, then repeats.
  rl.question('Enter a score (or type "exit" to quit): ', function(input) {
                                                // 12) Show a prompt and wait for the user's response; when entered, run the callback with "input".

    if (input.toLowerCase() === "exit") {       // 13) If the user types "exit" (in any case), we stop the loop.
      console.log("Exiting... Goodbye!");       // 14) Inform the user we're exiting.
      rl.close();                                // 15) Close the readline interface to end the program.
      return;                                    // 16) Return so we don't continue processing this iteration.
    }

    const score = Number(input);                 // 17) Convert the input string to a number.
    if (!isNaN(score)) {                         // 18) Check that the conversion produced a valid number.
      console.log(`Score: ${score} → Grade: ${assignGrade(score)}\n`);
                                                // 19) If valid, compute and print the grade with a friendly message.
    } 
    else {
      console.log("Invalid input. Please enter a number.\n");
                                                // 20) If not a number, tell the user it's invalid.
    }

    askForScore();                               // 21) Recursively call the function to ask again (this creates the loop).
  });
}

// Start the app
askForScore();                                   // 22) Kick off the first prompt so the app starts interacting.

console.log('--------------- PLURALIZE Function----------------')




// Pluralize function
/*Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 100));

console.log('--------------- Alternative PLURALIZE Function----------------')


/* 
   Function: pluralize
   Description: Takes a noun and a number, returns "<number> <noun>" in pluralized form.
   Rules:
   - If number = 1 → singular form
   - If number != 1 → plural form
   - Handles special irregular nouns: sheep, goose, child, person
*/

function pluralize(noun, number) {
  // Handle irregular nouns
  const irregulars = {
    sheep: "sheep",
    goose: "geese",
    child: "children",
    person: "people"
  };

  if (number === 1) {
    return `${number} ${noun}`;
  } else {
    // Check if noun is in irregulars
    if (irregulars[noun]) {
      return `${number} ${irregulars[noun]}`;
    }
    // Default rule: add "s"
    return `${number} ${noun}s`;
  }
}

/* 
   Test cases
*/
console.log(pluralize("cat", 5));     // "5 cats"
console.log(pluralize("dog", 1));     // "1 dog"
console.log(pluralize("sheep", 3));   // "3 sheep"
console.log(pluralize("goose", 2));   // "2 geese"
console.log(pluralize("child", 4));   // "4 children"
console.log(pluralize("person", 6));  // "6 people"
