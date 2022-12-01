const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://AnjalRajeev:anjalrajeev@cluster0.cgp2vwd.mongodb.net/LMS_Database?retryWrites=true&w=majority',{ 
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("----------MongoDB connected successfully----------");
})
.catch(error=>{
    console.log("...Connection error..."+error)
})