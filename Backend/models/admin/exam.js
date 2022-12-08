const mongoose=require('mongoose')

const examSchema=mongoose.Schema({
    title:{
        type:  String,
      required:true},
      qns:[{
            question: String, 
            option1: String, 
            option2: String,
            option3: String, 
            option4: String,
            answer:String
        }],
    
    course:String
    })

var examModel=mongoose.model("questions",examSchema)

module.exports=examModel