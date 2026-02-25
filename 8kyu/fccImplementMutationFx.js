function mutation(arr) {
  // Convert both strings to lowercase to ignore case sensitivity
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();

  // Check if each character in str2 is present in str1
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      return false;  // Return false if any letter is not found
    }
  }

  return true;  // Return true if all letters in str2 are found in str1
}

// Test cases
console.log(mutation(["hello", "Hello"])); 
console.log(mutation(["hello", "hey"]));   
console.log(mutation(["Alien", "line"]));  
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); 
console.log(mutation(["Mary", "Aarmy"]));  
console.log(mutation(["ate", "Date"]));  