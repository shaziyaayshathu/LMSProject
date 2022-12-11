const mongoose=require('mongoose')

const adminSchema=mongoose.Schema({
       email:{
            type:  String
          },
          password:{
            type:  String
          }
})

var adminModel=mongoose.model("admins",adminSchema)

module.exports=adminModel