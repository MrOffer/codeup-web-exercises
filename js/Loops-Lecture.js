"use strict";

/*
  WHILE LOOPS
*/

// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)

var i = 10;
while (i < 100) {
    console.log(i+=10);
}

// 2. Create a while loop that counts backwards from 50 - 1
var i = 50;

while (i >= 1) {
    console.log(i);
    i--;
}

var myQuestion;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?


while (myQuestion){
    myQuestion = confirm("Would you like to exit?");
}

/*
* DO-WHILE LOOPS
*/


// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?

do{
    myQuestion = confirm("Would you like to exit?");
} while(!myQuestion);


// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"

do {
    var color = prompt("give me a color");
} while(color !== "blue");

// 6. Refactor question 1 using a do-while loop.


do {
    console.log(i+=10);
} while (i <= 90);


/*
* FOR LOOPS
*/

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console

for(var y = 0; y < myArray.length; y++){
    console.log(myArray[y]);
}

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

for (var c = 1; c < 100; c++){
    if (c % 15 === 0) console.log("FizzBuzz");
     else if (c % 3 === 0) console.log("Fizz");
     else if (c % 5 === 0) console.log("Buzz");
        else console.log(c);
}

for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);


// 9. Refactor question 1 using a for-loop

for(i=10; i <= 100; i +=10){
    console.log(i);
}


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.

// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.

