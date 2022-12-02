const express=require('express')
const router=express.Router();
module.exports=router

const examModel=require('../models/admin/exam')

router.post('/addexam',async (req,res)=>{
    try {
        const newExam = new examModel(req.body)
        await newExam.save()
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
pdfRoute.post("/createPdf", async (req, res) =>  {
    try {
      const newPDF = new pdfModel(req.body);
      await newPDF.save();
      await classModel.updateOne(
        { _id: newPDF.class },
        { $push: { pdfs: newPDF._id } }
      );
      await chapterModel.updateOne(
        { _id: newPDF.chapter },
        { $push: { pdfs: newPDF._id } }
      );
      await partModel.updateOne(
        { _id: newPDF.part },
        { $push: { pdfs: newPDF._id } }
      );
      await courseModel.updateOne(
        { _id: newPDF.course },
        { $push: { pdfs: newPDF._id } }
      );
      res.status(200).json({
        msg: "Successfully Created A PDF",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: "Server Error",
      });
    }
  })