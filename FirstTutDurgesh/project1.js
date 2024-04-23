const url = require("url")
const http = require("http")
const fs = require("fs");

http.createServer((req,res)=>{
    //request
    const path = req.url
    if(path == '/about'){
        console.log("about page")
        res.writeHead(200,{
            'content-type':'text/html'
        })
        const fileContent = fs.readFileSync("./FirstTutDurgesh/views/about.html")
        res.write(fileContent);
    }else if(path == "/"){

        console.log("Home page")
        res.writeHead(200,{
            'content-type':'text/html'
        })
        const fileContent = fs.readFileSync("./FirstTutDurgesh/views/home.html")
        res.write(fileContent);
    }else if(path == "/services"){
        console.log("services")
        res.writeHead(200,{
            'content-type':'text/html'
        })
        const fileContent = fs.readFileSync("./FirstTutDurgesh/views/sevices.html")
        res.write(fileContent);
    }
}).listen(8082)