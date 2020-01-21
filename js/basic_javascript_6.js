function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Utilizing HTML, JavaScript and ternary operators, 
// create a basic program that outputs whether or not a user
//  is old enough to vote.
function canVote() {
    var age = document.getElementById("voter_age").value;
    var can_vote = (age < 18) ? "You are to young" : "You are old enough";
    document.getElementById("vote_status").innerHTML = can_vote + " to vote.";
}

// Write and execute the HTML and JavaScript code exactly
// as laid out in the previous course step.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// utilize the new and this keyword
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var Marshall = new Person("Marshall", "Aronow", 56);

function displayMarshall() {
    str = Marshall.firstName + " " + Marshall.lastName + " is ";
    str += Marshall.age + " years old";
    document.getElementById("New_and_This").innerHTML = str;
}

// nested function
function nestedFunction() {
    var answer = 2 + 2;
    document.getElementById("nested_function").innerHTML = "2 + 2 = " + makeBold(answer);
    function makeBold(x) {
        var result = "<strong>" + x + "</strong>";
        return result;
    }
}