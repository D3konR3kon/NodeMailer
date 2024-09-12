const nodemailer = require("nodemailer");
const dotenv = require('dotenv')

dotenv.config()



exports.createMail = async (dest, subject, message, attachment)=>{

   
    const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: dest,
    subject: `${subject}`,
    html: `<p>${message} </p>`,
    attachments: [
      {
        filename: attachment.file.name,
        content: attachment.file.data,
        contentType:  attachment.file.mimetype
      }
    ]
  };

transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
   console.error('Error occurred:', error);
   } else {
    
   console.log('Email sent successfully:', info.response);
   }
});
}

