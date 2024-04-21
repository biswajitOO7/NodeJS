const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h>This is my first server</h>")
    res.write("<button>Click me</button>")
    res.end("Ok by by")
})
server.listen(9898)
