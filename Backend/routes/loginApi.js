const express=require('express')
const router=express.Router();
var jwt = require('jsonwebtoken');


const userModel=require('../models/admin/user')

router.post('', async(req, res)=>{
  
    let data = req.body;
    try {
        admin={
            Email: 'admin@gmail.com',
            Password: 'admin' 
        }
       
        let loginData
        Email = data.Email
        Password = data.Password

        let payload = {
            'email': Email,
            'password': Password
        }

        

        if(JSON.stringify(data) === JSON.stringify(admin)){
            console.log('admin', admin)
            console.log('data', data)
            
            loginData = [{role: 'admin'}]
            let token = jwt.sign(payload,'learning management system')
            // console.log(token)
            res.send([loginData,token])
            // console.log(loginData)
        }
        else{ 
            console.log("before checking to db",loginData)
            // loginData = await studentModel.find({email:Email})
            if(loginData == null){
                
                loginData = await userModel.find({email:Email})  
                console.log("after checking db",loginData) 
            }
            
            if(loginData == ''){ 
                console.log('user dosent exist')
                res.send({'status':'0'})
            }else if(loginData[0].password != Password){
                res.send({'status':'-1'})
                console.log('invalid credentials') 
            }else{
                let token = jwt.sign(payload,'learning management system')
                // console.log(token)
                res.status(200).send([loginData,token])  
            }
        }
    } catch (error) {
        console.log(error)
    }
})




module.exports=router
