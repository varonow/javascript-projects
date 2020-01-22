// global variable
var str = "Global";

function variableScope() {
    // local variable
    var x = "Local";
    document.getElementById("global_variable").innerHTML = str;
    document.getElementById("local_variable").innerHTML = x;
}
variableScope();
// gives error
document.getElementById("local_error").innerHTML = x;

// conditional time greeting
function greeting() {
    var msg;
    var myTime = new Date().getHours();
    if ((myTime < 12) && (myTime >= 5)) {
        msg = "Good morning!";
    } else if ((myTime >= 12) && (myTime<= 18)) {
        msg = "Good afternoon!";
    } else if (myTime > 18) {
        msg = "Good evening!";
    } else {
        msg = "Go to sleep!";
    }

    document.getElementById("greeting").innerHTML = msg;
}


// conditional if statement
function passFail() {
    var grade = 75;
    var msg;
    if (grade >= 70) {
        msg = "The student passes with a grade of ";
    } else {
        msg = "The student failed with a grade of ";
    }
    document.getElementById("pass_fail").innerHTML = msg + " " + grade;
}

/* Write a function that includes an if statement and an else statement.
   Write the relevant document.getElementById() methods as covered in the
   previous course step. */
   function canDrink() {
       var age = document.getElementById("user_age").value;
       var msg = "";
       if ((isNaN(age)) || (age == undefined) || age == "") {
           msg= "You did not enter a number"
       } else if (age < 21) {
           msg = "You are too young to drink"
       } else {
           msg = "What can I get you to drink?"
       }
    document.getElementById("message").innerHTML = msg;   
   }

/* Write out all code from the previous course step and successfully execute
   it in the browser. */
   function Time_function() {
       var Time = new Date().getHours();
       var Reply;
       if (Time < 12 == Time > 0) {
           Reply = "It is morning time!";
       } else if (Time > 12 == Time < 18) {
           Reply = "It is the afternoon.";
       } else {
           Reply = "It is evening time.";
       }
       document.getElementById("Time_of_day").innerHTML = Reply;
   }