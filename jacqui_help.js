// Q2
console.log("Q2")

// I checked online, and there is a more efficient way to do this, by using a "sieve". You can check it out here (https://www.craigrodrigues.com/blog/the-sieve-of-eratosthenes-in-javascript), but I didn't really understand the code to be honest, so I didn't use it. Plus, I think it's a higher level of code than what they expect from you, because it doesn't use the modulo remainder operator.
// I got this code from StackOverflow and have added explanations in case you don't understand what it's actually doing
// It's not the most efficient / elegant solution, but it was the easiest to understand which I think is important :)

// create a function to find if a specific number is a prime number
// "num" will be an actual integer that gets passed into the function

function isPrime(num) {

  // if the number is less than 2 it will not be prime, so return false

    if(num < 2) return false;

    // this is the start of a "for" loop
    // if the number has a remainder of 0, then it is not prime, so return false
    // this code starts by checking if "num" is divisible by 2, then 3, then 4 etc. incrementally until it reaches the "num" parameter

    for (let i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }

    // if the number wasn't divisible by anything, then it is prime, so return true

    return true;
}

// now we pass in the range from 1 to 100 and use the function we just created
// we use another for loop

for(let i = 0; i < 100; i++){

  // if the number is prime, print it to the console

    if(isPrime(i)) console.log(i);
}

// Q3
console.log("Q3a")

// go up incrementally from 0 to 50
// see if the number is divisible by 2
// if it isn't, print it to the console
for(i=0; i<=50; i++){
  if(i % 2 !== 0){
    console.log(i);
  }
}

console.log("Q3b")
// go up incrementally from 51 to 100
// see if the number is divisible by 2
// if it is, print it to the console
for(i=51; i<=100; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

// Q4

console.log("Q4")

let numArray = [-40,23,-15,4,7,18,-29,35,58,95,-167,678];
let positiveOddNumbers = [];
let negativeEvenNumbers = [];

numArray.forEach((num) => {
  if (num % 2 !== 0 && num >= 0) {
    positiveOddNumbers.push(num);
  }  else if (num % 2 == 0 && num < 0) {
    negativeEvenNumbers.push(num);
  }
});

console.log(positiveOddNumbers, negativeEvenNumbers)

// Q5

console.log("Q5")

let income = 60000;

function taxOwed(income) {
  let tax = 3572 + (income - 37000) * 0.325;
  return Number.parseFloat(tax).toFixed(2);
}

console.log(`$${taxOwed(income)}`)

// Q6

console.log("Q6")

// Q7

console.log("Q7")

let dataArray = [2,2,3,3,3,4,5,5,7,8,8,34,45,45,67,67,95,96,567,578];

// mean
// let sum = dataArray.reduce((previous, current) => current += previous);
// let avg = sum / dataArray.length;
function avg(dataArray){
  let sum = dataArray.reduce(function(sum, value){
    return sum + value;
  }, 0);

  let avg = sum / dataArray.length;
  return avg;
}
console.log(avg(dataArray))

// median
dataArray.sort((a, b) => a - b);
let lowMiddle = Math.floor((dataArray.length - 1) / 2);
let highMiddle = Math.ceil((dataArray.length - 1) / 2);
let median = (dataArray[lowMiddle] + dataArray[highMiddle]) / 2;
console.log(median)

// standard deviation
function standardDeviation(dataArray){
  let squareDiffs = dataArray.map(function(value){
    let diff = value - avg(dataArray);
    let sqrDiff = diff * diff;
    return sqrDiff;
  });

  let avgSquareDiff = avg(squareDiffs);

  let stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

console.log(standardDeviation(dataArray))

// Q8

console.log("Q8")

let arr = [0,1,2,3,4,9,10];

// i have no fuckin idea why the negative 1 is in here. but i left it in cos it was the only way i could get it to work lol. i'm sure it's an easy fix.

let n = -1;

while (n < arr.length -1) {
  n++;
  console.log(arr[n]);
}

// Q9

console.log("Q9")
