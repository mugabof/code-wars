function chunkArrayInGroups(array, n) {
  const arraysWithSamelength = Math.floor(array.length / n);
  let splitCount = arraysWithSamelength;
  if (array.length % n != false) splitCount++ ;
  const newArray = [];
  for (let i = 1; i <= splitCount; i++) {
    if (array.length > n) {
      newArray.push(array.splice(0, n))
    } else {
      newArray.push(array)
    }
  }
  return newArray
}


console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5,6,7,8,9,10], 4));