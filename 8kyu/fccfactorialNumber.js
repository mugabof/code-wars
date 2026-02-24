let   num=7;
function factorialCalculator(num){
  let result=1;
 for (let i=num;i>0 ;i--){
result=result*i;//result *=i;
 }
 return result;
}
let factorial=factorialCalculator(num);

let resultMsg=`Factorial of ${num} is ${factorial}`;
console.log(resultMsg);