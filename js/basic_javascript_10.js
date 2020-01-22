// global variables
var msg = "";
var i = 0;
var Instruments = ["Flute", "Piano", "Guitar", "Oboe", "Trumpet", "Saxaphone"];
var Numbers = [1,2,456,765,33,698,40];
// create a while loop.
function callLoop() {
    var counter = 1;
    while (counter <= 10) {
        msg += counter + "<br />";
        counter++;
    }
    document.getElementById("while_loop").innerHTML = msg;
}

// Write and execute the string length property in the browser.
function countCharacters() {
    var str = document.getElementById("user_string").value;
    var count = str.length;
    msg = str + " has " + count + " characters!";
    document.getElementById("number_of_characters").innerHTML = msg;
}

// For loop example
function listInstruments() {
    msg = "";
    for (i=0; i < Instruments.length; i++) {
        msg += Instruments[i] + "<br />";
    }
    document.getElementById("list_of_instruments").innerHTML = msg;
}

// Create and display an array
function createAttendees() {
    msg="";
    var Attendees = [];
    Attendees[0] = "Victoria Aronow";
    Attendees[1] = "Joyce Saad";
    Attendees[2] = "Danielle Dabah";
    Attendees[3] = "Kimberly Dabah";
    Attendees[4] = "Elizabeth Aronow";
    Attendees[5] = "Stephanie Aronow";

    for (i=0; i < Attendees.length; i++) {
        msg += Attendees[i] + "<br />";
    }
    document.getElementById("new_attendees_array").innerHTML = msg;
}

// Create const and display property
function constFirstPresident(){
    const FIRST_PRESIDENT = {name: "George Washington", title: "President"};
    // Change a property’s value. - this is allowed for
    FIRST_PRESIDENT.name = "Abraham Lincoln";
    /* this is not allowed
    FIRST_PRESIDENT = {name: "George"}; */
    // Add a property with a value. - this is also allowed  
    FIRST_PRESIDENT.spouse = "Martha Washington"
    msg = FIRST_PRESIDENT.title + " " + FIRST_PRESIDENT.name + " married to " + FIRST_PRESIDENT.spouse;
    document.getElementById("first_president").innerHTML = msg;
}

// Use let
function changeMsg() {
    let msg = "This message was written using let";
    document.getElementById("change_msg").innerHTML = msg;
}

// Write and execute the return statement in the browser.
function showEquation() {
    var a = 32;
    var b = 68;
    msg = a + " + " + b + " = " + addTwoNumbers(a,b);
    document.getElementById("equation").innerHTML = msg;
}

function addTwoNumbers(x, y) {
    return x + y;
}

// create an object using the let keyword. Ensure your object includes properties and a method.
function createDog() {
    let dog = {
        name: "Archie",
        breed: "MaltiPoo",
        color: "Apricot",
        description: function() {
            return this.name + " is an " + this.color + " colored " + this.breed
        }        
    };
    document.getElementById("show_dog").innerHTML = dog.description();
}

// loop example with break
function anyEvens() {
    msg = "There are no even numbers in the list";
    for (i=0; i< Numbers.length; i++) {
        if (Numbers[i] % 2 == 0) { 
            msg = "There ARE even numbers in the list";
            break;
         }       
    }
    document.getElementById("have_evens").innerHTML = msg;
}

// loop example with continue
function getEvens() {
    msg = "";
    for (i=0; i< Numbers.length; i++) {
        if (Numbers[i] % 2 != 0) { continue; }
        msg += Numbers[i] + "<br />";
    }
    document.getElementById("show_evens").innerHTML = msg;
}