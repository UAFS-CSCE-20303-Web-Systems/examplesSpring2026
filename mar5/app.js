const mydata = require("./mydata");


console.log("Start Sync");
const results = mydata.getDataSync();
console.log(results);
console.log("Finish Sync");

console.log("Start Async");
mydata.getDataAsync(function(data){
    console.log(data);
})
console.log("Finish Async");