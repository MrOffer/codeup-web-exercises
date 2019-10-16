function showMultiplicationTable(x) {
    return x + " x " + i + " = " + (x * i);

    for (var i = 1; i <= 10; i++) {
        console.log(showMultiplicationTable(7));
    }
}



for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(Math.floor(Math.random(i) * 180) + 20 + " is even!");
    }
    else {
        console.log(Math.floor(Math.random(i) *  180) + 20 + " is odd!");
    }
}


for (var i = 1; i < 10; i += 1){
    var output = "";

    for (var j = 0; j < i; j += 1){
        output += i;
    }

    console.log(output);
}



for (var i = 100; i >=5; i -= 5){
    console.log(i);
}


