const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req,res)=>{
    //console.log('New Request received');
    console.log(req.headers)
    // we will use non blocking othrewish all threads will be busy on file reading 
    const log = `${Date.now()}:${req.url} new req received\n`
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/': res.end("Home page");
            break
            case '/about':res.end("I am Piyush");
            break;
            default : res.end("404 Not Found");
        }
        //res.end("Hello From Server");
    });
    //res.end("Hello From Server");  // printed in browser
});

myServer.listen(8001,()=>console.log("Server started"));