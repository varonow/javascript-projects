// concat() method to connect two or more strings
function usingConcat() {
    var firstName = "Victoria";
    var lastName = "Aronow";
    var fullName = firstName.concat(" ", lastName);
    document.getElementById("my_name").innerHTML = fullName;
}

// global variables
var sentence = "My husband is Marshall Aronow";
var long_number = 485379.34573945;

// write a slice() method that displays a section of a string.
function getMarshall() {
    var name = sentence.slice(14, 22);
    document.getElementById("husband").innerHTML = name;
}

// Successfully write and execute the toUpperCase() method.
function upper() {
    var user_input = document.getElementById("lower_case").value;
    document.getElementById("to_uppercase").innerHTML = user_input.toUpperCase();
}

// Successfully write and execute the search() method
function findAronow() {
    var index = sentence.search("Aronow");
    document.getElementById("last_name").innerHTML = sentence.slice(index);
}

// utilize the toString() method to return a number as a string.
function yearsToString() {
    var years = 35;
    document.getElementById("married").innerHTML = years.toString();
}

/* utilize the toPrecision() method to return a string as a number
    of a specified length. */
function numToPrecision() {
    document.getElementById("number_precision").innerHTML = long_number.toPrecision(9).toString();
 }

 /* Successfully write and execute the toFixed() method. */
 function numToFixed() {
    document.getElementById("number_fixed").innerHTML = long_number.toFixed(2);
 }

 // write and execute the valueOf() method.
 function numValueOf() {
    document.getElementById("number_value").innerHTML = (48 + 52).valueOf().toString();
 }