"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my website!");

var userInput = prompt('What is your favorite color?');
alert(userInput + " is my favorite color too!");

var lilMermaidDays = parseInt(prompt('How many days would you like to keep Little Mermaid?'));
var broBearDays = parseInt(prompt( 'How Many days would you like to keep Brother Bear?'));
var herculesDays = parseInt(prompt( 'How Many days would you like to keep Hercules?'));
var dailyFee = 3;
var total =  (lilMermaidDays * dailyFee) + (broBearDays * dailyFee) + (herculesDays* dailyFee);
alert("Your total will be $" + total);
if (lilMermaidDays === 1) {
    alert("Little Mermaid is due back on Tomorrow by 3pm")
}
if (lilMermaidDays === 2) {
    alert("Little Mermaid is due back on Wednesday by 3pm")
}
if (lilMermaidDays === 3) {
    alert("Little Mermaid is due back on Thursday by 3pm")
}
if (lilMermaidDays === 4) {
    alert("Little Mermaid is due back on Friday by 3pm")
}
if (lilMermaidDays === 5) {
    alert("Little Mermaid is due back on Saturday by 3pm")
}
if (lilMermaidDays === 6) {
    alert("Little Mermaid is due back on Sunday by 3pm")
}
if (lilMermaidDays === 7) {
    alert("Little Mermaid is due back on Next Monday by 3pm")
}
if (broBearDays === 1) {
    alert("Brother Bear is due back on Tomorrow by 3pm")
}
if (broBearDays === 2) {
    alert("Brother Bear is due back on Wednesday by 3pm")
}
if (broBearDays === 3) {
    alert("Brother Bear is due back on Thursday by 3pm")
}
if (broBearDays === 4) {
    alert("Brother Bear is due back on Friday by 3pm")
}
if (broBearDays === 5) {
    alert("Brother Bear is due back on Saturday by 3pm")
}
if (broBearDays === 6) {
    alert("Brother Bear is due back on Sunday by 3pm")
}
if (broBearDays === 7) {
    alert("Brother Bear is due back on Next Monday by 3pm")
}
if (herculesDays === 1) {
    alert("Hercules is due back on Tomorrow by 3pm")
}
if (herculesDays === 2) {
    alert("Hercules is due back on Wednesday by 3pm")
}
if (herculesDays === 3) {
    alert("Hercules is due back on Thursday by 3pm")
}
if (herculesDays === 4) {
    alert("Hercules is due back on Friday by 3pm")
}
if (herculesDays === 5) {
    alert("Hercules is due back on Saturday by 3pm")
}
if (herculesDays === 6) {
    alert("Hercules is due back on Sunday by 3pm")
}
if (herculesDays === 7) {
    alert("Hercules is due back on Next Monday by 3pm")
}



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


var fullClass = confirm("Is there room in the class?");
var scheduleConflict = confirm("Is there a schedule conflict?");
if (fullClass  && !scheduleConflict) {
    alert("Enrolled in Class");
} else {
    alert("Not Enrolled");
}



var itemsBought = parseInt(prompt("How many items are being purchased?"));
var offerValid = confirm("Is the Expiration still Valid?");
var premiumMember = confirm("Are you a Premium Member?");
if (offerValid && (itemsBought > 2 || premiumMember)) {
    alert("Congratulations! Discount Valid!");
} else {
    alert("Sorry Offer Invalid!");
}

