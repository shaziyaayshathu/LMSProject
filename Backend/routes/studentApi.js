const express = require('express')
const router = express.Router();

const courseModel = require('../models/admin/course')
const userModel = require('../models/admin/user')
const verifytoken = require('../Middlewares/jwtVerify')
const feedbackModel = require('../models/admin/feedback')



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
router.post('/feedback', async(req,res)=>{
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

router.post('/course-name', async(req,res)=>{
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




module.exports = router
