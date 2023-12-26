const accountId = 1;
let accountEmail = "danwichoudhary@gmail.com";
var accountPassword = "12345";
accountCity = "Deoghar";

// accountId = 2  //not allowed

accountEmail = "dc@dc.com";
accountPassword = "123456";
accountCity = "Grugram";
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
