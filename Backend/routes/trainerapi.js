const express=require('express')
const router=express.Router();
const multer=require('multer')
module.exports=router
var path = require('path');

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"uploads")
  },
  filename:function(req,file,cb){
    cb(null,`${Date.now()}_${file.originalname}`)
  }
})
const upload=multer({storage})
const examModel=require('../models/admin/exam');
const feedbackModel = require('../models/admin/feedback');
const pdfModel=require('../models/admin/pdf')
const submissionModel=require('../models/submission')

router.post('/addexam',async (req,res)=>{
    try {
     console.log(req.body.course)
     console.log(req.body.data.qns)
     console.log(req.body.data.title)
     const title=req.body.data.title
     const qns=req.body.data.qns
     
       // const {title,qns}=req.body.data
      const course=req.body.course
        const newExam = new examModel({title,qns,course})
        await newExam.save()
        console.log(newExam)
        res.status(200).json({
            msg: "Successfully created the exam"
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            msg: "Server Error"
        });
    }
})


router.get('/courses',async (req,res)=>{
    courseModel.find((error,dbdata)=>{
        if(error){
            res.json(error)
        }
        else{
           res.json(dbdata)
        }
    })
})

//single File upload

// router.post("/uploadPdf",upload.single("file") ,async (req, res) =>  {
//     try {
//       const file=req.file
//       if(file)
//       {
//         res.json(file)
//       }
//       else{
//         throw new Error("File not found")
//       }
      
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({
//         msg: "Server Error",
//       });
//     }
//   })
router.post("/uploadPdf",upload.array("files") ,async (req, res) =>  {
  try {
    
    // console.log(req.files)
    // console.log(req.files.path)
    // console.log(req.body.title)
    // const files=req.files
    // if( Array.isArray(files) && files.length >0)
    // {
    //   res.json(files)
    // }
    // else{
    //   throw new Error("File not found")
    // }
    
    const  title= req.body.title;
    const course=req.body.course
    console.log(req.body.course)
    console.log(req.body.filename)
    let filePath = [];
      //const files=req.files
      if (req.files.length > 0) {
        filePath = req.files.map((file) => {
          return { file: file.originalname };//file: path.join(__dirname + '/uploads/' +file.originalname)
        
        });
      }
      else{
        throw new Error("File not found")
      }
      const pdf = new pdfModel({title,filePath,course});
      console.log(pdf)
      pdf.save((error, data) => {
        if (error) return res.status(400).json({ error });
        if (data) {
          res.status(201).json(data);
        }
      });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
})
router.get('/uploads',async (req,res)=>{
  try {
   const list=await pdfModel.find()
   console.log(list)
   return res.json(list);
   
  } catch (error) {
   
   console.log(error)
  }
   
})
router.get('/feedback',async (req,res)=>{
  try {
   let  Course=req.body.couse
   const feed=await feedbackModel.find({course:Course})
   console.log(feed)
   return res.json(feed);
   
  } catch (error) {
   
   console.log(error)
  }
   
})
router.get('/submissions',async (req,res)=>{
  try {
   let  Course=req.body.course
   const submissions=await submissionModel.find({course:Course})
   console.log(submissions)
   return res.json(submissions);
   
  } catch (error) {
   
   console.log(error)
  }
   
})
router.post('/submissions',async (req,res)=>{
  try {
    console.log(req.body)
   const list=req.body
   const sub=new submissionModel(list)
   await sub.save()
   console.log(sub)
   res.send(sub)
   
  } catch (error) {
   
   console.log(error)
  }
   
})

