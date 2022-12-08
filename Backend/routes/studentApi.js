const express = require('express')
const router = express.Router();

const courseModel = require('../models/admin/course')
const userModel = require('../models/admin/user')
const verifytoken = require('../Middlewares/jwtVerify')

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

router.get('/courses', async(req,res)=>{
    try {

        data = await courseModel.find()
        console.log(data)
        res.send(data)

    } catch (error) {

        console.log("error from courses api", error)
    }
})
 
router.post('/course', async(req,res)=>{
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

                                                                      




module.exports = router
