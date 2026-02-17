/*This line defines a function named solution, which accepts an array a as an argument. This array contains integers that are sorted in ascending order, and the task is to find the element that minimizes the sum of absolute differences with all other elements.*/
/*For a = [2, 4, 7], the output should be solution(a) = 4.

for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
The lowest possible value is when x = 4, so the answer is 4.

For a = [2, 3], the output should be solution(a) = 2.

for x = 2, the value will be abs(2 - 2) + abs(3 - 2) = 1.
for x = 3, the value will be abs(2 - 3) + abs(3 - 3) = 1.
Because there is a tie, the smallest x between x = 2 and x = 3 is the answer.*/
function solution(a) {

  var indexOfMinimum = -1;
  var minimalSum = Number.MAX_VALUE;

  for (var i = 0; i < a.length; i++) {
    var sum = 0;
    for (var j = 0; j < a.length; j++) {
      sum += Math.abs(a[j] - a[i]);
    }
    if (sum < minimalSum) {
      minimalSum = sum;
      indexOfMinimum = i;
    }
  }

  return a[indexOfMinimum];
}
console.log(solution([2,4,7])); //4
console.log(solution([2,3]));//2 and 3 biratanga 1 ariko kubera 2 ariko gato ni 2


