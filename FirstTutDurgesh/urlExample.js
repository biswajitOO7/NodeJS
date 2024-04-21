const http = require("http")
const url = require("url") 

// url.parse()

http.createServer((request,response)=>{
    console.log(request.url);
    const urlOb = url.parse(request.url)
    console.log(urlOb)
}).listen(8082)
// output:
// /admin
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: null,
//   query: null,
//   pathname: '/admin',
//   path: '/admin',
//   href: '/admin'
// }


