const http = require('node:http');
const url = require("node:url");
const queryString = require("node:querystring");

const server = http.createServer(function(req,res){

    if(req.method === 'GET'){
        let parsedURL = url.parse(req.url,true);
        let name = parsedURL.query.name;
        res.end(`Hello ${name}!`);
        console.log(name);
    }
    
});

server.listen(3000,function(){
    console.log("Listening on port 3000")
});