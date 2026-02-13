const str = 'freeCodeCamp';

for (let char of str) {
  console.log(char);
}
//==================================================
const arr=["*","**","***","****","*****","******","*******"];
for ( let i of arr){
    console.log(i);
}
//==================================================
let num=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
for(let i of num){
    sum=sum+i;
    
}
console.log("The Sum of this array=" + sum);
console.log("The Average of this array=" + sum/num.length);

console.log("=====================for ....of loop typically used for arrays and strings============================");

const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);

}
console.log("===================Another example================");
const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}