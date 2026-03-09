function repeatStringNumTimes(str, num) {
  // Check if num is less than or equal to 0
  if (num <= 0) {
    return ""; // Return an empty string if num is <= 0
  }
  
  let repeatedString = ""; // Initialize an empty string to accumulate repeated values

  // Loop num times to repeat the string
  for (let i = 0; i < num; i++) {
    repeatedString += str; // Add the string to repeatedString each iteration
  }

  return repeatedString; // Return the final repeated string
}

// Example Test Cases
console.log(repeatStringNumTimes("abc", 3)); // Should return "abcabcabc"
console.log(repeatStringNumTimes("hello", 0)); // Should return ""
console.log(repeatStringNumTimes("world", -2)); // Should return ""
console.log(repeatStringNumTimes("java", 2)); // Should return "javajava"
console.log(repeatStringNumTimes("Mugabo carter!", 5)); // Should return "!!!!!"

//=============================================================================================
function fearNotLetter(str) {
  // Loop through the string and compare the character codes of consecutive letters
  for (let i = 0; i < str.length - 1; i++) {
    // If the difference in character codes is greater than 1, then we have a missing letter
    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
      // Return the missing letter by converting the character code back to a letter
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  
  // If no letter is missing, return undefined
  return undefined;
}

// Example Test Cases
console.log(fearNotLetter("abce")); // Should return "d"
console.log(fearNotLetter("abcdef")); // Should return undefined
console.log(fearNotLetter("abcdefghjklm")); // Should return "i"
console.log(fearNotLetter("opqrs")); // Should return "t"
console.log(fearNotLetter("xyz")); // Should return undefined