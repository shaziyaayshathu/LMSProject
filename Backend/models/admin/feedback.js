const mongoose=require('mongoose')

const feedbackSchema=mongoose.Schema({
    feedback:{
        type:String,
        required:true
    },
    studentName:String,
    
    course:String


})
const feedbackModel = new mongoose.model("feedbacks", feedbackSchema)
module.exports = feedbackModel