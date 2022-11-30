const express=require('express')
const router=express.Router();
module.exports=router

const courseModel=require('../models/admin/course')
const studentModel=require('../models/admin/student')
const trainerModel=require('../models/admin/trainer')

//course api

router.post('/addcourse',async (req,res)=>{
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


router.get('/courses',async (req,res)=>{
    courseModel.find((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})

//student api

router.post('/addstudent',async (req,res)=>{
    let data=req.body
    const student=new studentModel(data)
    await student.save((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})

router.get('/students',async (req,res)=>{
    studentModel.find((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})

//trainer api

router.post('/addtrainer',async (req,res)=>{
    let data=req.body
    const trainer=new trainerModel(data)
    await trainer.save((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})

router.get('/trainers',async (req,res)=>{
    trainerModel.find((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})
