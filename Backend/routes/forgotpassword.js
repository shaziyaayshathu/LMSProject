const nodemailer = require('nodemailer');
const express = require('express');
const userModel = require('../models/admin/user');
const e = require('express');
const router = express.Router();

let email = ''
let name = ''
let pw = ''

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lessonly2022@gmail.com',
    pass: 'zugehfwypcyhamlr' // 
  }
});



router.post('/forgot', async(req, res)=>{
    try {
    console.log(req.body)
    let mailID = req.body.Email
    email = mailID
    console.log(email)
    let data = await userModel.find({email : email})
    console.log(data)
    
    if(data == ''){
        console.log("email does'nt exists")
        res.send({"status" : 0})
    }else{
        pw = data[0].password
        name = data[0].name
        console.log(pw) 
        console.log(name)
        const mailOptions = {
            from: 'lessonly2022@gmail.com',
            to: email,
            subject: 'Password Recovery',
            text: `Hello ${name} . As per your password recovery request , we are providing your credential for further login. 

     Password :  ${pw} 

NB : If the request isn't from your side , kindly contact the admin ASAP `
          }; 
        transporter.sendMail(mailOptions, function(error, info){  
            if (error) {
	            console.log(error);
                console.log("errorrrr")
            } else { 
                console.log('Email sent: ' + info.response);
            }
        });

        res.send({"status" : 1})
    }
    
        
    } catch (error) {
        console.log("error from forgot password api", error)
    }
    
})

module.exports = router