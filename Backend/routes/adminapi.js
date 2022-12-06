const express=require('express')
const router=express.Router();
module.exports=router

const courseModel=require('../models/admin/course')
const userModel=require('../models/admin/user')
const verifytoken = require('../Middlewares/jwtVerify')

//course api

router.post('/addcourse',verifytoken,async (req,res)=>{
    let data=req.body
    const course=new courseModel(data)
    await course.save((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})


router.get('/courses',verifytoken, async (req,res)=>{
    courseModel.find((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
            // console.log(req.headers.authorization)
           res.json(dbdata)
        }
    })
})

router.get('/editcourse/:id',verifytoken,(req,res)=>{
    courseModel.findOne({"_id":req.params.id},(error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})


router.put('/updatecourse/:id',verifytoken,async (req,res)=>{
    let data=req.body
    await courseModel.findOneAndUpdate({"_id":req.params.id},data)
    res.send(data)
 })


router.delete('/deletecourse/:id',verifytoken,(req,res)=>{
    courseModel.remove({"_id":req.params.id},(err,data)=>{
      if(err){
        res.send("The error is "+err)
      }
      res.json("deleted")
    })
  })


//student api

router.post('/addstudent',verifytoken,async (req,res)=>{
    let data=req.body
    const student=new userModel(data)
    await student.save((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
    
})

router.get('/students',verifytoken,async (req,res)=>{
    userModel.find((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
           
        }
    })
})

router.get('/editstudent/:id',verifytoken,(req,res)=>{
    userModel.findOne({"_id":req.params.id},(error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})


router.put('/updatestudent/:id',verifytoken,async (req,res)=>{
    let data=req.body
    await userModel.findOneAndUpdate({"_id":req.params.id},data)
    res.send(data)
 })


 router.delete('/deletestudent/:id',verifytoken,(req,res)=>{
    userModel.remove({"_id":req.params.id},(err,data)=>{
      if(err){
        res.send("The error is "+err)
      }
      res.json("deleted")
    })
  })



//trainer api

router.post('/addtrainer',verifytoken,async (req,res)=>{
    let data=req.body
    const trainer=new userModel(data)
    await trainer.save((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})

router.get('/trainers',verifytoken,async (req,res)=>{
    userModel.find((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})


router.get('/edittrainer/:id',verifytoken,(req,res)=>{
    userModel.findOne({"_id":req.params.id},(error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})


router.put('/updatetrainer/:id',verifytoken,async (req,res)=>{
    let data=req.body
    await userModel.findOneAndUpdate({"_id":req.params.id},data)
    res.send(data)
 })

 router.delete('/deletetrainer/:id',verifytoken,(req,res)=>{
    userModel.remove({"_id":req.params.id},(err,data)=>{
      if(err){
        res.send("The error is "+err)
      }
      res.json("deleted")
    })
  })

  router.get('/countcourse',verifytoken,(req,res)=>{
    courseModel.countDocuments({},(error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})


router.get('/countstudent',verifytoken,(req,res)=>{
    userModel.countDocuments({role:"student"},(error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})

router.get('/counttrainer',verifytoken,(req,res)=>{
    userModel.countDocuments({role:"trainer"},(error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})