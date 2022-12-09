const mongoose=require('mongoose')

const feedbackSchema=mongoose.Schema({
    
    studentName:String,
    feedback:{
        type:String,
        required:true
    },
    
    course:Number


})
const feedbackModel = new mongoose.model("feedbacks", feedbackSchema)
module.exports = feedbackModel