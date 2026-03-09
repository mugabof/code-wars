let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


// Function to look up a profile based on name and property
function lookUpProfile(name, prop) {
  // Loop through the contacts array
  for (let i = 0; i < contacts.length; i++) {
    // If a contact's firstName matches the provided name
    if (contacts[i].firstName === name) {
      // Check if the property exists on the contact
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]; // Return the value of the property
      } else {
        return "No such property"; // Property does not exist
      }
    }
  }
  
  return "No such contact"; // Name does not match any contact
}

// Example Test Cases
console.log(lookUpProfile("Akira", "lastName")); // Should return "Laine"
console.log(lookUpProfile("Harry", "number")); // Should return "987-654-3210"
console.log(lookUpProfile("Sherlock", "likes")); // Should return ["Detective Work", "Smoking Pipe"]
console.log(lookUpProfile("John", "lastName")); // Should return "No such contact"
console.log(lookUpProfile("Akira", "age")); // Should return "No such property"