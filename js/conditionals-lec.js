"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin
// if (isAdmin) {
//    show a specific navbar
// }

//Together: Send a 20% off coupon if its users birthday
// if (isBirthday) {
//  send 20% off coupon! Happy Birthday!
//}

//Together: Write an if statement that alerts "It's raining" if isRainy is true
//var isRainy = true
//if (isRainy) {
//    alert("It's Raining")
//}


//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemCost = 100;
// var currentBalance = 200;
// if(itemCost < currentBalance) {
//    alert("you have enough money! Yay!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

if (numberOfLives === 0) {
    alert("Sorry, game over");
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing.

if (weather === "snowing") {
    alert("It's snowing");
 }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

if (numberInput > 10) {
   alert(true);
}



//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.

function lives0(x) {
    if (x ===0) {
        alert("Sorry, game over");
    }
}

function snow(x) {
    if (x === "snowing") {
        alert("It's snowing");
    }
}
function greaterThan(x) {
    if (x < 10) {
        alert(true);
    }
}

// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar
// if (isAdmin) {
//     alert("User is Admin");
// } else {
//    alert("User is a regular user!");
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// if (isRaining) {
//    alert("It's Raining!");
//} else {
//    alert("Have a nice day!");
// }



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

if (numberOfLives === 0) {
    alert("Sorry, game over");
} else {
  alert("Next Level");
 }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

if (weather === "snowing") {
   alert("It's snowing");
 } else {
   alert("Check back later for more details");
 }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

if (numberInput > 10) {
    alert(true);
} else {
    alert("the number is less that 10");
 }



//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 

function checkIfGameIsOver(x) {
    if (x === 0) {
        return "Sorry, game over";
    } else {
        return "Next Level";
    }
}

 console.log(checkIfGameIsOver(6));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

 function IsItSnowing() {
     if (weather === "snowing") {
         return "It's snowing";
     } else {
         return "Check back later for more details";
     }
 }
     console.log(IsItSnowing('snowing'));


// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
     var age = confirm("Are you 13 or older?")
     if (age) {
         alert("You may proceed");
     } else {
         alert("Sorry, you are not able to proceed");
     }

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }


// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
     var weather = "snowing";
     if (weather === "snowing") {
         alert("It's snowing");
     } else if (weather === "rainy") {
         alert("It's raining");
     } else {
         alert("Have a nice day!");
     }

//Together: refactor the above statement as a function
     function weatherType(x) {
         if (x === "snowing") {
             alert("It's snowing");
         } else if (x === "rainy") {
             alert("It's raining");
         } else {
             alert("Have a nice day!");
         }
     }

     weatherType("rainy");
// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }


//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

     function trafficLightColor(color) {
         if (color === "green") {
             return "Go!";
         } else if (color === "yellow") {
             return "Slow Down!";
         } else if (color === "red") {
             return "Stop!";
         } else {
             return "Invalid";
         }
     }

     console.log(trafficLightColor("green"));


// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license. 
     var age = parseInt(prompt("How old are you?"));
     var permit = confirm("Do you have a permit?");
     if (age < 15) {
         alert("Not eligible for a learners permit or license");
     } else if (age === 15) {
         alert("you are eligible for a learners permit but not a license");
     } else if (age > 15 && permit) {
         alert("you are eligible for a license");
     } else if (age > 15 && permit === false) {
         alert("You need a learners permit for your license");
     }



// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

     var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

     var weatherMessage = (weather === "rainy") ? "It's raining" : "Have a nice day!";
     console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

     switch (weather) {
         case "snow":
             alert("It's Snowing!");
             break;
         case "rainy":
             alert("It's raining!");
             break;
         case "sunny":
             alert("It's Sunny!");
             break;
         default:
             alert("I don't know what that means");
             break;
     }

//TODO: Rewrite the intersection function from earlier as a switch statement.

     function lightColor(color) {
         switch (color) {
             case "green":
                 return "Go!";
                 break;
             case "yellow":
                 return "Go Faster";
                 break;
             case "red":
                 return "Stop, if people are looking!";
                 break;
             case "blinking yellow":
                 return "Caution!";
                 break;
             case "blinking red":
                 return "Stop, then go when it's clear";
                 break;
             default:
                 return  "Drive Faster!!";
                 break;
         }
     }
         console.log(lightColor("red"));


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

//  user checks off the chore was done with a confirm that is true and it adds 5 to the total

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

//   user clicks the weather type of weather and it uses a case for each type of weather that returns the string.

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

//  user selects a theme and its using a confirm to the white theme or if you want to add more colors do a if else.
//