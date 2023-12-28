// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Iron Man", "Spider Man", "Captain America"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.table([myArr, myArr2, myHeros]);

// Array methods

// myArr.push(6);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(0);
// myArr.shift();
// console.log(myArr);

// console.log(`Index of 3 is: ${myArr.indexOf(3)}`);

// const newArr = myArr.concat(myHeros);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);
