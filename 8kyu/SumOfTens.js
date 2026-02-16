/*You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer n

A positive two-digit integer.

Guaranteed constraints:
10 ≤ n ≤ 99.

[output] integer

The sum of the first and second digits of the input number. */


function solution(n) {
    let tens = Math.floor(n / 10);   the tens digit
    let ones = n % 10;              // Extract the ones digit
    return tens + ones;             // Return the sum of both digits
}


console.log("The sum of integers 29: " + calculateTens(29));
