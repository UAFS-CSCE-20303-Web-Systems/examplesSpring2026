const users=[];

addUser("Smith","Joe");
addUser("Wilson", "Mary");
addUser("Jones", "Bill");

let add = addUser;
let display = function(){
    console.log(users);
};
display();

add("Williams","Trent");

console.log(users);

function addUser(lname, fname){
    let user = {"lname": lname, "fname": fname};
    users.push(user);
}