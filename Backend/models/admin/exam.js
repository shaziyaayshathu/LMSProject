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
            option4: String
        
          
    }],
    answer:{
        type:String,
        required:true
    }
        
         
})

var examModel=mongoose.model("questions",examSchema)

module.exports=examModel