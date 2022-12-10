const mongoose=require('mongoose')
// Init Schema
const submissionSchema = mongoose.Schema({
    
    title: String, 
    studName:String,  
    marks:Number,
    course:Number,
    created_at: {
        type: Date,
        default: Date.now(),
        required: true,
    }
    

})

// Model Init
const submissionModel = new mongoose.model("submissions", submissionSchema)
module.exports = submissionModel
