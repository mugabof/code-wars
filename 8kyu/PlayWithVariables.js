console.log('---------------The Age Calculator----------------');
var birthYear = 1984;
var futureYear  = 2012;
var age  = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));


let myYearOfBirth=1999;
let tfutureYear=2050;

function HowOldIWillBe(myYearOfBirth,tfutureYear){
    return tfutureYear-myYearOfBirth;
};
console.log(HowOldIWillBe(1991,2060));

//The Fortune Teller App
console.log('---------------The Fortune Teller----------------');

var numKids  = 5;
var partner  = 'David Beckham';
var geoLocation = 'Costa Rica';
var jobTitle = 'web developer';

var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
console.log(future);