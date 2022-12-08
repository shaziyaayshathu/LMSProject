const mongoose=require('mongoose')
// Init Schema
const pdfSchema = mongoose.Schema({
    
    title: {type: String},   
    filePath: [{ file:  String } ],
    // course:{
    //     type: mongoose.Types.ObjectId,
    //     required: true,
    //     ref: "courseModel",
    // },
    course:String,
    created_at: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }

})

// Model Init
const pdfModel = new mongoose.model("pdfModel", pdfSchema)
module.exports = pdfModel