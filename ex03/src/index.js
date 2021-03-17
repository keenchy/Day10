// Only change code below this line

var myFood = {
    vegatable: "carrot",
    fruit: "orange",
    drink: "water"
};

function myFunction(myFood) {
    var vegatablecarrot = myFood["vegatable"];
    var fruitorange = myFood["fruit"];
    var drinkwater = myFood["drink"];
    return { vegatablecarrot, fruitorange, drinkwater };
}

// Only change code above this line

console.log(myFunction(myFood)); // Change this line
module.exports = myFunction(myFood);