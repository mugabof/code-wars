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
    let tens = Math.floor(n / 10);   //the tens digit
    let ones = n % 10;              // Extract the ones digit
    return tens + ones;             // Return the sum of both digits
}


console.log("The sum of integers 29: " + solution(29));

// loops while, do while loop, break and continue
// ATM Withdrawal: only allow withdrawals while you still have balance,Real life idea: If you have no money, the withdrawal process should not even start.
let balance = 50000; // RWF
const withdrawAmount = 10000;

let count = 0;

while (balance >= withdrawAmount) {
  count++;
  balance -= withdrawAmount;
  console.log(`Withdrawal #${count}: -${withdrawAmount} RWF | Remaining: ${balance} RWF`);
}

console.log("No more withdrawals allowed. Final balance:", balance, "RWF");

// Login: user must try at least once (do...while runs once before checking),A login screen must show at least once before you can check if the password is correct.
const correctPassword = "1234";

// Simulated user attempts (in real life, you’d read input from user)
const attempts = ["0000", "1234", "2222"];
let i = 0;

let enteredPassword;

do {
  enteredPassword = attempts[i];
  console.log(`Attempt ${i + 1}: user entered -> ${enteredPassword}`);
  i++;
} while (enteredPassword !== correctPassword && i < attempts.length);

if (enteredPassword === correctPassword) {
  console.log("✅ Login successful!");
} else {
  console.log("❌ Login failed. No attempts left.");
}