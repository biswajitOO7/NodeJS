console.log("project started")

// email sender
const mailer = require('nodemailer')
const transport = mailer.createTransport({
    service:'gmail',
    auth:{
        user:'',
        pass:''
    }
})
let messageOb ={
    from:'',
    to:'',
    subject:'',
    text:''
} 
transport.sendMail(messageOb,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log("email sent");
        console.log(info.response)
    }
})