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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (It stores Primitive Data types), Heap (stores Non-Primitive Data types)

let myName = "Dainwi";
let anotherName = myName;
anotherName = "Dainwi Choudhary";

console.log(myName);
console.log(anotherName);

let user = {
  email: "user@gmail.com",
  upi: "user@upi",
}

let anotherUser = user;
anotherUser.email = "user@google.com";

console.table([user.email, anotherUser.email]);