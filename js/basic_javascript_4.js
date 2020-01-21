function myDictionary() {
    var person = {
        firstName: "Victoria",
        lastName: "Aronow",
        city: "New York",
        state: "NY"
    }
    delete person.state;
    var str = person.firstName + " " + person.lastName + " lives in ";
    str += person.city + ", " + person.state;
    document.getElementById("dictionary").innerHTML = str;
}