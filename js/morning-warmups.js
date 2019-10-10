function sum(a, b) {
    return a + b;
}

console.log(sum(3, 5));

function tarea(a, b, c) {
    var parm = (a + b + c) / 2;
    var trarea = Math.sqrt(parm * (parm - a) * (parm - b) * (parm - c));
    return trarea;
}

console.log(tarea(5, 6, 7));


function sayhi() {
    return "Hi";
}

console.log(sayhi());

function hello(x) {
    return "Hello " + x + "!";
}

console.log(hello("David"));

function first(arr) {
    return arr[0];
}

console.log(first(["hi", "hello"]))

function ptarea(a, b, c) {
    var parm = (a + b + c) / 2;
    var ptrarea = Math.sqrt(parm * (parm - a) * (parm - b) * (parm - c));
    return ptrarea;
}

function f(x, y, z) {
    return x + " " + y + " " + z;
}

console.log(f(["bat", "elephant"], [1, 2], [5, 6]));

function uppercase(x) {
    return x.toUpperCase();
}

console.log(uppercase("a"));

function areaOfCircle(x) {
    var r = x / 2;
    return Math.pi * (r * r);
}

console.log(areaOfCircle(10));

function p(x, y, z, a) {
    return x + y + z + a;
}

console.log(p(3, 2, 5, 7));

function f1(x) {
    return typeof(x);
}

function positiveEven(x) {
    return x % 2 === 0 && x > 0;
}
console.log(positiveEven(32));


function greaterThanFive() {
    var userNum = parseInt(prompt("Give me a number"));
    return (userNum > 5);
}
console.log(greaterThanFive());

function multiply(num, num1) {
    return num * num1;
}
console.log(multiply());

var multiplyby= function(num, num1) {
    return num * num1;
};
multiplyby();

function helloThere(string = 'Stranger') {
  return 'Hello there, ' + string + '!';
}
var response = prompt('Input string, plox.');
alert(helloThere(response));

function arrayLength(x) {
 return x.length;
}
console.log(arrayLength([3, 5, 6, 8]));