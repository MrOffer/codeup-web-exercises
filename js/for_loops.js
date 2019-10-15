function showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        console.log(i + " x " + x + " = " + i * x);
    }
}
console.log(showMultiplicationTable(7));

var number = Math.floor(Math.random() * 200) + 20;
for (var i = 1; i <= 10; i++) {
    i++;
    if (number % 2 === 0) {
        console.log(i++ + number + " is Even");
    } else if (number % 2 !== 0) {
          console.log(i++ + number + " is Odd")
      }
}