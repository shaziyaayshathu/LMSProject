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
const examModel=require('../models/admin/exam')
const pdfModel=require('../models/admin/pdf')

router.post('/addexam',async (req,res)=>{
    try {
     // console.log(req.body)
        const {title,qns}=req.body
        const newExam = new examModel({title,qns})
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
      const pdf = new pdfModel({title,filePath});
      console.log(pdf)
      pdf.save((error, data) => {
        if (error) return res.status(400).json({ error });
        if (data) {
          res.status(201).json({ data });
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
