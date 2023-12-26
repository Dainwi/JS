// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const id2 = Symbol("123");

console.log(id == id2);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Iron Man", "Spider Man", "Thor"];

let myObj = {
  name: "Dainwi",
  age: 19,
};

const myFunction = function () {
    console.log("I'm a function");
}