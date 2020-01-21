
// Addition example
function addTwoPlusTwo() {
    var number = 2 + 2;  
    document.getElementById("math").innerHTML = number;
}

// Subtract example
function subtractNumbers(x, y) {
    var number = x - y;
    document.getElementById("math2").innerHTML = number;
}

// Multiple math example
function multipleNumbers() {
    var result = (3 + 4) * (7 - 3) / 2;
    var str = "(3 + 4) * (7 - 3) / 2 = " + result;
    document.getElementById("math3").innerHTML = str;
}

// Modulus example
function getRemainder() {
    var result = 54 % 10;
    var str = "The remainder of 54 divided by 10 is " + result;
    document.getElementById("math4").innerHTML = str;
}

// Negation example
function returnNegative() {
    var x = 17;
    var str = "The negative form of 17 is " + -x;
    document.getElementById("math5").innerHTML = str;
}

// using increment
function increment() {
    var x = 5;
    x++;
    var str = "5 incremented by 1 = " + x;
    document.getElementById("math6").innerHTML = str;
}

// using decrement
function decrement() {
    var x = 5;
    x--;
    var str = "5 decremented by 1 = " + x;
    document.getElementById("math7").innerHTML = str;
}

// sample getting a random number
function randomNumber() {
    var x = Math.floor(Math.random() * 10) + 1;  
    var str = "A random whole number between 1 and 10 is " + x;
    document.getElementById("math8").innerHTML = str;
}

// sample using JavaScript Math
function usingMathSqrt() {
    var x = Math.sqrt(144);  
    var str = "The square root of 144 is " + x;
    document.getElementById("math9").innerHTML = str;
}