// Create School object here

var school = {
    name: "Paragon",
    location: "Arena Sarajevo",
    established: "2020"
};
// End of School object

function myFunction(school) {

    // Only change code below this line

    var nameParagon = school["name"];
    var locationArenaSarajevo = school["location"];
    var established2020 = school["established"];
    return (nameParagon, locationArenaSarajevo, established2020);

    // Only change code above this line
}
console.log(myFunction(school)); // Change this line

module.exports = { school, myFunction };