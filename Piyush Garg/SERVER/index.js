const http = require("http");
const fs = require("fs");
const url = require("url"); // https://www.npmjs.com/package/url -- Documentation


const myServer = http.createServer((req,res)=>{
    //console.log('New Request received');
    console.log(req.headers)
    if(req.url === "/favicon.ico") return res.end();
    // we will use non blocking othrewish all threads will be busy on file reading 
    const log = `${Date.now()}:${req.url} new req received\n`
    const myUrl = url.parse(req.url,true); // true mean We want query parameter string 
    console.log(myUrl);
    fs.appendFile('log.txt',log,(err,data)=>{
        //switch(req.url){
        switch(myUrl.pathname){
            case '/': res.end("Home page");
            break
            case '/about':
                const username = myUrl.query.myname; 
                //res.end("I am Biswajit");
                res.end(`I am ${username}` );
            break;
            case "/search" :   // http://localhost:8001/search?search_query=tit+tak+toe
                const search = myUrl.query.search_query;
                res.end("Here are your result for "+ search);
            default : res.end("404 Not Found");
        }
        //res.end("Hello From Server");
    });
    //res.end("Hello From Server");  // printed in browser
});

myServer.listen(8001,()=>console.log("Server started"));