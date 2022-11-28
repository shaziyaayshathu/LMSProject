const mongoose=require('mongoose')
mongoose.connect('',{ 
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("My MongoDB is connected successfully...");
})
.catch(error=>{
    console.log("Connection error"+error)
})