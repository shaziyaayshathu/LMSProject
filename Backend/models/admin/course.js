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
  }
})

var courseModel = mongoose.model("courses", courseSchema)

module.exports = courseModel