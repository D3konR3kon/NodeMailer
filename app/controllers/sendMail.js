const mailerHander = require("../middlewares/mailer")

exports.createMail = async (req, res)=>{
    try{
        const {email, subject, message} = req.body

        let attachment = req.files || req.files.file

        console.log(attachment)

        if(!(email && subject && message)){
            console.log("Please provide data to all data fields");
            return
        }

        const results = await mailerHander.createMail(email, subject, message, attachment)

        console.log("results", results)
        
    }catch(err){
        console.log("Some err:", err)
    }
}