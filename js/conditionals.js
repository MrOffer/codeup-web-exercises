"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var number = confirm('Would you like to enter a number?');
if (number == true) {
    var numberGiven = parseInt(prompt("What Number would you like to give me?"));
} else {
    alert('Thanks Anyway!');
}
if (number == true && numberGiven % 2 === 0) {
    alert('The number you gave me is even!')
      }
if (number == true && numberGiven % 2 === 1)  {
    alert('The number you gave me is odd!')
}
var plus100 = numberGiven + 100;

if (number == true) {
    alert('The number you gave me plus 100 is ' + plus100);
}
if (number == true && numberGiven > 0) {
    alert('The number you gave me is positive')
}
if (number == true && numberGiven < 0) {
    alert('The number you gave me is negative')
}
if (typeof numberGiven === isNaN)     {
    alert('You did not enter a number please refresh the page');
}
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(x) {
    if (x === 'blue') {
        alert('blue is the color of the sky')
    }  else if (x === 'red') {
        alert('Strawberries are red')
    }    else if (x === 'cyan') {
        alert("I dont know anything about cyan")
    }     else {
        alert('Your color is Invalid');
    }
}





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
   console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


var colorChoice = prompt("Give me a color please");
function colors(colorChoice) {
    switch (colorChoice) {
        case "blue":
            return "blue is the color of the sky";
            break;
        case "red":
            return "Strawberries are red";
            break;
        case "cyan":
            return 'I dont know anything about cyan';
        default:
            return colorChoice + " is Invalid!";
            break;
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
        var userColor = prompt('Please Give me a color');
        analyzeColor(userColor);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

 function calculateTotal(num, num1) {
       if (num === 1) {
             var tenPercent = num1 * .1;
             return num1 - tenPercent;
         }  else if (num === 2) {
             var twentyfivePercent = num1 * .25;
             return num1 - twentyfivePercent;
         }  else if (num === 3) {
             var thiryfivePercent = num1 * .35;
             return num1 - thiryfivePercent;
         }  else if (num === 4) {
             var fiftyPercent = num1 * .5;
             return num1 - fiftyPercent;
         }  else if (num === 5) {
             return 0;
         }  else {
             return num1;
         }
}

    console.log(calculateTotal(0, 100));
    console.log(calculateTotal(4, 100));
    console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = parseInt(prompt('What is your total Bill?'));
 alert('Your Lucky Number is ' + luckyNumber);
 alert('Your total bill before discount is ' + totalBill)
var discountedBill = calculateTotal(luckyNumber, totalBill);
 alert('Your Discounted Bill is ' + discountedBill);
