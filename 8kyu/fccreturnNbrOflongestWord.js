function findLongestWordLength(sentence) {
  let lWordLength = 0;
  sentence = sentence.split(" ");
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length > lWordLength) {
      lWordLength = sentence[i].length;
    }
  }

  return lWordLength;
}

let result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
//console.log(`Thes longest word is ${sentence[i] } with {${result} characters`);  // Output: 6
console.log(`The found longest word has  ${result} characters`);