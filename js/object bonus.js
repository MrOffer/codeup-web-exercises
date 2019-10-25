function filterNumbers(x){
    var arr = [];
    for (var i = 0; i < x.length -1; i++){
        if (typeof x[i] === "number"){
             arr.push(x[i]);
        }
    }
return arr.sort(function(a, b){return a - b});
}

console.log(filterNumbers(["no", 5, 1, 12, "yes"]));


var dogs =[
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

 function getOlder(x) {
     this.forEach(function (dog, index) {
         dogs[index].age += 1;
     })

     
 }
console.log(getOlder(dogs));
console.log(dogs);

function adminList() {

}