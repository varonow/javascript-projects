var str = "This sentence is a ";
str += typeof(str);
var p = "<p class=\"bold center\">";
var pEnd = "</p>";
document.write(p + str + pEnd);
// displaying NaN
str = "0/0 = "
var x = 0/0;
document.write(p + str + x + pEnd);
// using isNaN() to display false
x = 10;
str =  x + " is not a number: ";
document.write(p + str + isNaN(x) + pEnd);
// using isNaN() to display true
str = "This sentence is not a number: "
document.write(p + str + isNaN(str) + pEnd);
// display large infinity
x = 4E765;
str = "4E765 in JavaScript is considered: ";
document.write(p + str + x + pEnd);
// display large negative infinity
x = -4E765;
str = "-4E765 in JavaScript is considered: ";
document.write(p + str + x + pEnd);
// use Boolean logic to display true and false
bool = 5 > 4;
str = "5 > 4: ";
document.write(p + str + bool + pEnd);
bool = 5 < 4;
str = "5 < 4: ";
document.write(p + str + bool + pEnd);
// using console.log
str = "32 + 32 = ";
console.log(str + (32 + 32));
// type coersion
str = "five";
x = 5;
document.write(p + str + x + pEnd);
// display false in the console
str = "6 > 7: ";
bool = 6 > 7;
console.log(str + bool);
// using == to display true and false 
bool = 5 == 5;
str = "5 = 5: ";
document.write(p + str + bool + pEnd);
bool = 5 == 4;
str = "5 = 4: ";
document.write(p + str + bool + pEnd);
//Return true by ensuring to match the data type and value.
var str1 = "A";
var str2 = "A";
bool = str1 === str2;
str = "\"A\" and \"A\" have the same data type and value: ";
document.write(p + str + bool + pEnd);
//Return false by writing a different data type and different value.
var number = 10;
bool = str1 === number;
str = "\"A\" and 10 have the same data type and value: ";
document.write(p + str + bool + pEnd);
//Return false by writing a different data type but the same value for both.
str1 = "10";
bool = str1 === number;
str = "\"10\" and 10 have the same data type and value: ";
document.write(p + str + bool + pEnd);
//Return false by writing the same data type but a different value for both.
str1 = "a";
bool = str1 === str2;
str = "\"A\" and \"a\" have the same data type and value: ";
document.write(p + str + bool + pEnd);
// Utilize the AND operator to display true and false.
bool = (6 < 10) && (6 > 5); 
str = "(6 < 10) && (6 > 5): ";
document.write(p + str + bool + pEnd);
bool = (6 < 6) && (6 > 5); 
str = "(6 < 6) && (6 > 5): ";
document.write(p + str + bool + pEnd);
// Utilize the OR operator to display true and false.
bool = (6 < 10) || (6 > 5); 
str = "(6 < 10) || (6 > 5): ";
document.write(p + str + bool + pEnd);
bool = (6 < 6) || (6 == 5); 
str = "(6 < 6) || (6 == 5): ";
document.write(p + str + bool + pEnd);
// Utilize the NOT operator to display true and false.
bool = 5 == 5;
str = "!(5 == 5): ";
document.write(p + str + !bool + pEnd);
bool = 5 > 5; 
str = "!(5 > 5): ";
document.write(p + str + !bool + pEnd);