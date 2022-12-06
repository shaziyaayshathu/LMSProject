const mongoose=require('mongoose')
// Init Schema
const submissionSchema = mongoose.Schema({
    
    title: {type: String},   
    marks:Number,
    created_at: {
        type: Date,
        default: Date.now(),
        required: true,
    }
    

})

// Model Init
const submissionModel = new mongoose.model("submissions", submissionSchema)
module.exports = submissionModel