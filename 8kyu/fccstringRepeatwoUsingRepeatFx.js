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