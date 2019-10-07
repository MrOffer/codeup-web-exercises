"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my website!");

var userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);
alert(userInput + " is my favorite color too!" );

var lilMermaidDays = parseInt(prompt('How many days would you like to keep Little Mermaid?'));
var broBearDays = parseInt(prompt( 'How Many days would you like to keep Brother Bear?'));
var herculesDays = parseInt(prompt( 'How Many days would you like to keep Hercules?'));
var dailyFee = 3;
var total =  (lilMermaidDays * dailyFee) + (broBearDays * dailyFee) + (herculesDays* dailyFee);
alert("Your Total will be $" + total);


var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var gh = parseInt(prompt('How many hours did you work for Google?'));
var ah = parseInt(prompt('How many hours did you work for Amazon?'));
var fh = parseInt(prompt('How many hours did you work for FaceBook?'));
var th = (gh + ah + fh);
alert("Your total is: " + th + " hours");
var totalPay = (gh * googlePay) + (ah * amazonPay) + (fh * facebookPay);
alert("Your total pay is $" + totalPay);


var fullClass = confirm("Is the class full?");
var scheduleConflict = confirm("Is the a schedule conflict?");
if (fullClass === false && scheduleConflict === false) {
    alert("Enrolled in Class");
} else {
    alert("Not Enrolled");
}



var itemsBought = parseInt(prompt("How many Items are being purchased?"));
var offerExpired = confirm("Is the Offer Valid?");
var premiumMember = confirm("Are you a Premium Member?");
if (offerExpired === true && (itemsBought > 2) || premiumMember === true) {
    alert("Congratulations! Discount Valid");
} else {
    alert("Sorry Offer Invalid");
}

