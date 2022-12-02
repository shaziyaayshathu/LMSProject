const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  dob: {
    type: Date
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  courseID: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  teacherID:{

  }

})

var studentModel = mongoose.model("students", studentSchema)

module.exports = studentModel