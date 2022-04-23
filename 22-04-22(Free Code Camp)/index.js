// Manipulate Arrays With unshift()
// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul", 35]);
// ************************************************************!
// myList should be an array.
// The first elements in each of your sub-arrays should all be strings.
// The second elements in each of your sub-arrays should all be numbers.
// You should have at least 5 items in your list.
const myList = [
  ["a", 5],
  ["a", 5],
  ["a", 5],
  ["a", 5],
  ["a", 5],
];
// ************************************************************!
// Write Reusable JavaScript with Functions
// reusableFunction should be a function.
// If reusableFunction is called, it should output the string Hi World to the console.
// You should call reusableFunction once it is defined.
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
// ************************************************************!
// Passing Values to Functions with Arguments
// functionWithArgs should be a function.
// functionWithArgs(1,2) should output 3.
// functionWithArgs(7,9) should output 16.
// You should call functionWithArgs with two numbers after you define it.
function functionWithArgs(n1, n2) {
  console.log(n1 + n2);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);
// ************************************************************!
// Return a Value from a Function with Return
// timesFive should be a function
// timesFive(5) should return 25
// timesFive(2) should return 10
// timesFive(0) should return 0
function timesFive(n1) {
  return n1 * 5;
}
console.log(timesFive(5));
console.log(timesFive(2));
console.log(timesFive(0));
// ************************************************************!
// Global Scope and Functions
// myGlobal should be defined
// myGlobal should have a value of 10
// myGlobal should be declared using the let or const keywords
// oopsGlobal should be a global variable and have a value of 5
let myGlobal = 10;
let oopsGlobal = 5;
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
// ************************************************************!
// Local Scope and Functions
// The code should not contain a global myVar variable.
// You should add a local myVar variable.

function myLocalScope() {
  // Only change code below this line
  let myVar = 10;

  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);
// ************************************************************!
// Global vs. Local Scope in Functions
// You should not change the value of the global outerWear.
// myOutfit should return the string sweater.
// You should not change the return statement.
// Setup
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
// ************************************************************!
// addFive should be a function.
// Once both functions have run, the sum should be equal to 8.
// Returned value from addFive should be undefined.
// Inside the addFive function, you should add 5 to the sum variable.
// Setup
let sum = 0;

function addThree(sum) {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = 3;
  sum += 5;
  console.log(sum);
}

// Only change code above this line

addThree();
console.log(addFive(5));
// ************************************************************!
// Assignment with a Returned Value
// processed should have a value of 2
// You should assign processArg to processed
// Setup
let processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
// Only change code below this line
// ************************************************************!
