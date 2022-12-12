const express = require('express')
const router = express.Router();
const path = require('path')

const courseModel = require('../models/admin/course')
const userModel = require('../models/admin/user')
const verifytoken = require('../Middlewares/jwtVerify')
const feedbackModel = require('../models/admin/feedback')
const examModel = require('../models/admin/exam')
const submissionModel = require('../models/submission')
const pdfModel=require('../models/admin/pdf')


// for showing user's profile
router.post('/profile',verifytoken, async (req, res) => {
     
    try {
        // console.log("at backend",req.body.id)
        let id = req.body.id;
        data = await userModel.find({ _id: id })
        res.send(data)

    } catch (error) {
        
        console.log("error from profile api", error)
    }
})            


// for displaying all courses in home page
router.get('/courses',verifytoken, async(req,res)=>{
    try {

        data = await courseModel.find()
        console.log(data)
        res.send(data)

    } catch (error) {

        console.log("error from courses api", error)
    }
})
 

// display single course in dialoge box
router.post('/course',verifytoken, async(req,res)=>{
    try {
        
        id = req.body.id
        console.log(id)
        data = await courseModel.findById(id);
        console.log(data)
        res.send(data)

    } catch (error) {

        console.log("error from single course api", error)
    }
})


// for storing feedback to db
router.post('/feedback', verifytoken, async(req,res)=>{
    try {
        
        console.log(req.body)
        let data = req.body.data
        let newFeedback = new feedbackModel(data)
        let savedFeedback = await newFeedback.save() 
        res.send(savedFeedback)

    } catch (error) {

        console.log("error from feedback api", error)
        
    }
    
})

// for taking course name
router.post('/course-name',verifytoken, async(req,res)=>{
    try {
        // console.log(req.body.id)
        course_id = req.body.id
        // console.log(course_id)
        data = await courseModel.find({courseID : course_id});
        console.log(data)
        res.send(data)
    } catch (error) {
        console.log("error from coursename api", error)
    }
})

// for displaying all exam of a specific courseID in exams page
router.post('/exams', async(req, res)=>{
    try {
        course_id = req.body.id
        exam = await examModel.find({course : course_id})
        console.log(exam)
        res.send(exam)
    } catch (error) {
        console.log("error from exams api", error)
    }
})

// for displaying single exam according to id 
router.post('/exams/:id', async(req, res)=>{
    try {
        id = req.params.id
        console.log(id)
        exam = await examModel.find({_id : id})
        console.log(exam)
        res.send(exam)
    } catch (error) { 
        console.log("error from single exams api", error)
    }
})
 
router.post('/exam-submission', async(req, res)=>{
    console.log(req.body)
    try {
        data = req.body
        let newSubmission = new submissionModel(data)
        let savedFeedback = await newSubmission.save() 
        res.send(savedFeedback)
        
    } catch (error) {
        console.log("error from exam submission api", error)
    }
}) 

  

// for displaying grade according to id 
router.post('/grades', async(req, res)=>{
    console.log(req.body)
    try {
      let data=req.body.data
       let  course_id = data.id 
        let name=data.name
        grades = await submissionModel.find({course : course_id,studName:name})
        console.log(grades)
        res.send(grades)
    } catch (error) { 
        console.log("error from  exams api", error)
    }
})

router.post('/uploads',async (req,res)=>{
    try {
     id = req.body.id
     console.log(id)
     const list=await pdfModel.find({course : id})
     console.log(list)

     res.send(list)
     
    } catch (error) {
     
     console.log(error)
    }
     
})

router.post('/download', async(req, res)=>{
    try {

        console.log(req.body)
        console.log('here');
        filepath = path.join(__dirname,'../uploads') + '/' + req.body.fileName;
        console.log("path is : ",filepath);
        res.sendFile(filepath);


    } catch (error) {
        console.log(error)
    }
})


module.exports = router
 