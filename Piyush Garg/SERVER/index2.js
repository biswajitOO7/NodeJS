const http = require("http");
const express =  require("express");

const app = express();  // initializing app // app basically a Handler function

app.get("/",(req,res)=> {
    return res.send('Hello from home page');
});
app.get("/about",(req,res)=> {
    return res.send('Hello from about page'+' hey '+req.query.name+' you are of '+req.query.age);//http://localhost:8002/about?name=biswajit&age=20
});


const myServer = http.createServer(app);
myServer.listen(8002,()=> console.log("Server started!"));