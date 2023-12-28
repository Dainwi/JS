// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toLocaleString());
console.log(myDate.getDate());
console.log(myDate.getFullYear());

let myDate2 = new Date(2020, 10, 1);
console.log(myDate2.toDateString());
console.log(myDate2.getTime());

let myTimeStamp = Date.now();

console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate.getTime());

newDate.toLocaleString("default", {
  weekday: "long",
  dateStyle: "full",
});
