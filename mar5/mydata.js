const data = [
  { name: "Joe", age: 21 },
  { name: "Mary", age: 27 },
  { name: "Jim", age: 31 },
];

function getDataSync(){
    return data;
}

function getDataAsync(callback){
    setTimeout(function(){
        callback(data);
    },5000);
}

export { getDataSync, getDataAsync }