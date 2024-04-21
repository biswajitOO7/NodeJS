const fs = require('fs') // file system module
// fs.readFile("./FirstTutDurgesh/abc.txt",(error,data)=>{
//     if(error){
//         console.log("error");
//         console.log(error);
//     }
//     else{
//         console.log(data.toString());
//     }
// })
// console.log("Terminated");

const data = fs.readFileSync("./FirstTutDurgesh/abc.txt")
console.log(data.toString())
console.log("Terminated");



let content = "This is dynamic content"
fs.writeFile('./FirstTutDurgesh/new_file.txt',content,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Saved");
    }
})


fs.appendFile('./FirstTutDurgesh/new_file.txt',"new content",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("saved")
    }

})

// delete

fs.unlink('./FirstTutDurgesh/new_file.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("deleted")
    }
})
