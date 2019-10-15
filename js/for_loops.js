function showMultiplicationTable(x) {
    for (var i = 1; i < 11; i++) {
        console.log(i + " x " + x + " = " + i * x);
    }
}


var number = Math.floor(Math.random() * 200) + 20;
function oddOrEven() {
    for (var i = 1; i <= 10; i++) {
        if (number % 2 === 0) {
            console.log(++i + number + " is Even");
        } if (number % 2 !== 0) {
            console.log(++i + number + " is Odd")
        }
    }
}
console.log(oddOrEven());