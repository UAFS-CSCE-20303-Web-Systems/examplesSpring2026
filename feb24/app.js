console.log("Hello World");

let user={};
user.fname="Joe";
user.lname="Smith";
user['age']=30;
let jsonStr = JSON.stringify(user);
console.log(user);
console.log(jsonStr);
