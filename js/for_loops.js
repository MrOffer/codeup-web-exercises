"use strict";

function showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {

    console.log( x + " x " + i + " = " + (x * i));

    }
}
 console.log(showMultiplicationTable(7));


for (var j = 1; j <= 10; j++) {
    if (j % 2 === 0) {
        console.log(Math.floor(Math.random(j) * 180) + 20 + " is even!");
    }
    else {
        console.log(Math.floor(Math.random(j) *  180) + 20 + " is odd!");
    }
}


for (var a = 1; a < 10; a += 1){
    var output = "";

    for (var b = 0; b < a; b += 1){
        output += a;
    }

    console.log(output);
}



for (var c = 100; c >=5; c -= 5){
    console.log(c);
}


