// Only change code below this line

var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};

function myFunction(myClothes) {
    var hatFedora = myClothes.hat;
    var shirtNike = myClothes.shirt;
    var shoesConverse = myClothes.shoes
    return {
        hatFedora,
        shirtNike,
        shoesConverse
    };
}

// Only change code above this line

console.log(myFunction(myClothes)); // Change this line
module.exports = myFunction(myClothes);