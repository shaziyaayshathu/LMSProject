const express=require('express')
const router=express.Router();

const studentModel=require('../models/admin/student')
const trainerModel=require('../models/admin/trainer')

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
        if(JSON.stringify(data) === JSON.stringify(admin)){
            console.log('admin', admin.value)
            console.log('data', data.value)
            
            loginData = [{role: 'admin'}]
            res.send(loginData)
            // console.log(loginData)
        }
        else{
            loginData = await studentModel.find({email:Email})
            if(loginData == ''){
                loginData = await trainerModel.find({email:Email}) 
            }
            
            if(loginData == ''){
                console.log('user dosent exist')
                res.send({'status':'0'})
            }else if(loginData[0].password != Password){
                res.send({'status':'-1'})
                console.log('invalid credentials') 
            }else{
                res.status(200).send(loginData)
            }
        }
    } catch (error) {
        console.log(error)
    }
})




module.exports=router
