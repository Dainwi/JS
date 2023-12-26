const name = "Dainwi";
const repoCount = 28;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare string
const gameName = new String("Dainwi Choudhary");
console.log(gameName);
console.log(gameName.__proto__);

console.table([
  gameName.length,
  gameName.toLocaleUpperCase(),
  gameName.toLowerCase(),
  gameName.charAt(2),
  gameName.indexOf("d"),
  gameName.search("D"),
]);
console.log(gameName.split(" "));

const newString = gameName.substring(0, 5);
console.log(newString);

const newString2 = "   Dainwi   ";
console.log(newString2);
console.log(newString2.trim());

const url = "https://example.com";

console.log(url.replace("example", "dainwi"));
