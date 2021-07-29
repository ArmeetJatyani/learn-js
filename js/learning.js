// Console logging
console.log(Date.now());

// Variables
let name = "Armeet";
console.log("My name is " + name + ".");

// Constant
const pi = 3.14;
console.log("PI: " + pi)

// Objects 
let person = {
    name: "Armeet",
    age: "16",
    username: "armeetjatyani"
};
console.log(person);
// Dot notation obj.property
person.name = "Armeet Jatyani"
console.log(person)
// Bracket notation obj.["property"]
console.log("Age: " + person["age"])

// Arrays
let colors = ["red", "green", "blue"];
console.log(colors);
console.log(colors[1]);
colors.push("black");
console.log(colors);

// Functions
function greet(person) {
    console.log("Hello " + person.name + "!");
}
greet(person);
greet({ name: "Billy" });
function square(a) {
    return a * a;
}
console.log("Square of 3 is " + square(3))

