// function sum(a, b) {
//     return a + b;
// }
//
// console.log(sum(3, 5));
//
// function tarea(a, b, c) {
//     var parm = (a + b + c) / 2;
//     var trarea = Math.sqrt(parm * (parm - a) * (parm - b) * (parm - c));
//     return trarea;
// }
//
// console.log(tarea(5, 6, 7));
//
//
// function sayhi() {
//     return "Hi";
// }
//
// console.log(sayhi());
//
// function hello(x) {
//     return "Hello " + x + "!";
// }
//
// console.log(hello("David"));
//
// function first(arr) {
//     return arr[0];
// }
//
// console.log(first(["hi", "hello"]))
//
// function ptarea(a, b, c) {
//     var parm = (a + b + c) / 2;
//     var ptrarea = Math.sqrt(parm * (parm - a) * (parm - b) * (parm - c));
//     return ptrarea;
// }
//
// function f(x, y, z) {
//     return x + " " + y + " " + z;
// }
//
// console.log(f(["bat", "elephant"], [1, 2], [5, 6]));
//
// function uppercase(x) {
//     return x.toUpperCase();
// }
//
// console.log(uppercase("a"));
//
// function areaOfCircle(x) {
//     var r = x / 2;
//     return Math.pi * (r * r);
// }
//
// console.log(areaOfCircle(10));
//
// function p(x, y, z, a) {
//     return x + y + z + a;
// }
//
// console.log(p(3, 2, 5, 7));
//
// function f1(x) {
//     return typeof(x);
// }
//
// function positiveEven(x) {
//     return x % 2 === 0 && x > 0;
// }
// console.log(positiveEven(32));
//
//
// function greaterThanFive() {
//     var userNum = parseInt(prompt("Give me a number"));
//     return (userNum > 5);
// }
// console.log(greaterThanFive());
//
// function multiply(num, num1) {
//     return num * num1;
// }
// console.log(multiply());
//
// var multiplyby= function(num, num1) {
//     return num * num1;
// };
// multiplyby();
//
// function helloThere(string = 'Stranger') {
//   return 'Hello there, ' + string + '!';
// }
// var response = prompt('Input string, plox.');
// alert(helloThere(response));
//
// function arrayLength(x) {
//  return x.length;
// }
// console.log(arrayLength([3, 5, 6, 8]));
//
// function quotient(x, y) {
//     if (typeof(x) === 'number' && typeof(y) === 'number') {
//         return x / y;
//     } else {
//         return false;
//     }
// }
// console.log(quotient(16, 8));
//
//
// function array1(arr) {
//   return arr;
// }
//  console.log(array1([1,2,3,4,5]));
//
// function eight(x) {
//     return x.length >= 8 && typeof x === "string";
// }
//  console.log(eight(76868556));
//
// function floatnumber(x) {
//     if (typeof x === 'number'  && !isNaN(x)) {
//         return Math.floor(x);
//     }
// }
// console.log(floatnumber(6.32));
//
// function countUp(x){
//     for (var i = 1; i <= x; i++ ){
//         console.log(i);
//     }
//     return "done counting";
// }
// console.log(countUp(10));

// function createPersonObject(a,b) {
//     var c = {};
//      c.name = a;
//      c.age = b;
//     return c;
// }
// console.log(createPersonObject("Thomas", 37));

// function fizzbuzz(num) {
//     for (i = 1; i <= num; i++){
//         if(i % 15 === 0){
//             console.log("fizz Buzz");
//         } else if (i % 3 === 0){
//             console.log("fizz");
//         } else if (i % 5 === 0){
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }
//     }
// return "finished!";
// }
// console.log(fizzbuzz(50));

// function five(x) {
//     if (x === "five") {
//         return 5;
//     }
// }
// console.log(five("five"));
// console.log(five("four"));
// console.log(five(5));

// var i = 0;
// while(i <= 10) {
//     console.log(i);
//     band.shred();
//
//
//     i++;
// }
// var band ={};
// band.shred = function() {
//     console.log('RAAAAAAAAAA!!!!');
// };
//
// band.shred();
//
// var shoppingCarts = [
//     {
//         apples: 8,
//         bananas: 2,
//         oranges: 4,
//         grapes: 24
//     }, {
//         apples: 3,
//         bananas: 6,
//         oranges: 8,
//         grapes: 12
//     } , {
//         apples: 0,
//         bananas: 12,
//         oranges: 0,
//         grapes: 0
//     }, {
//         apples: 4,
//         bananas: 0,
//         oranges: 12,
//         grapes: 10
//     }
// ];
//
// function mostOranges(x) {
//     var winner = x[0];
//     x.forEach(function (cart) {
//         if (cart.oranges > winner.oranges){
//             winner = cart;
//         }
//     });
//     return winner;
// }
//
// console.log(mostOranges(shoppingCarts));
//
//
// var students = [
//     {
//         name: "Mary",
//         grade: 10,
//         gpa: 3.7,
//         isRegistered: true
//     },
//     {
//         name: "Tim",
//         grade: 12,
//         gpa: 3.2,
//         isRegistered: false
//     },
//     {
//         name: "Ellie",
//         grade: 9,
//         gpa: 4.0,
//         isRegistered: false
//     },
//     {
//         name: "Alex",
//         grade: 10,
//         gpa: 3.9,
//         isRegistered: true
//     }
// ];
//
// function notRegistered(students) {
// var arr = [];
// students.forEach(function (student) {
//     if (student.isRegistered === false){
//         arr.push(student);
//     }
// });
// return arr;
// }
// console.log(notRegistered(students));
//
//
// //
// // var hamsters = [
// //     {
// //         name: "Hamtaro",
// //         heightInMM: 86,
// //         fur: ['orange', 'white'],
// //         gender: "male",
// //         dateOfBirth: "August 6"
// //     } , {
// //         name: "Bijou",
// //         heightInMM: 75,
// //         fur: ['white'],
// //         gender: "female",
// //         dateOfBirth: "July 10"
// //     } , {
// //         name: "Oxnard",
// //         heightInMM: 100,
// //         fur: ['grey', 'white'],
// //         gender: "male",
// //         dateOfBirth: "May 3"
// //     } , {
// //         name: "Boss",
// //         heightInMM: 120,
// //         fur: ['brown', 'white'],
// //         gender: "male",
// //         dateOfBirth: "Spetember 21"
// //     } , {
// //         name: "Snoozer",
// //         heightInMM: 85,
// //         fur: ['brown', 'white', "pink"],
// //         gender: "male",
// //         dateOfBirth: "January 14"
// //     }
// // ];
// //
// // function hampstersHeight(hamsters){
// //     return hamsters.sort(function (a,b) {
// //       return   a.heightInMM - b.heightInMM;
// //     });
// // }
// //
// // console.log(hampstersHeight(hamsters));


// Three favorite web applications and why

//1. Gmail - makes getting email easy and its easy to use and security

//2. Amazon - easy to buy and ship..quick! I dont have to go to the store and be around people to shop.

//3. Instagram - easy of use and to post. doesnt have the garbage of twitter and facebook.

function numAsWord(num){
    switch (num) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        default:
            return false;
    }
}
 var randomNum = Math.floor(Math.random() * 10) +1;

console.log(numAsWord(randomNum));

