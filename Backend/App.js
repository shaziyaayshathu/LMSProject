const express=require('express')
const cors=require('cors')
const logger=require('morgan')

const app=new express()

const PORT = process.env.PORT || 5200;

require('./Middlewares/mongoDB')

app.use(cors())          //to connect frontend and backend without any disturbances
app.use(express.json())       //to receive data from front end
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

const api=require('./routes/api')
app.use('/api',api)

const adminapi=require('./routes/adminapi')
app.use('/admin',adminapi) 

const loginApi = require('./routes/loginApi') //for login
app.use('/login', loginApi)

const trainerapi=require('./routes/trainerapi')
app.use('/trainer',trainerapi)



app.listen(PORT,()=>{
    console.log(`.......Server is listening at port ${PORT}........`)

})


