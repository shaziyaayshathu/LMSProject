const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  courseID: {
    type: String,
    required: true
  },
  image:{
    type:String
  }
})

var courseModel = mongoose.model("courses", courseSchema)

module.exports = courseModel