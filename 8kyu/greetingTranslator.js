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

