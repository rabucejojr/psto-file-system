const mongoose=require('mongoose')
const Document =require('../models/documentModel')

// get all document
const getDocs=async(req,res)=>{
    const docs=await Document.find({}).sort({createdAt:-1})
    res.status(200).json(docs)
}


// exports

module.exports={getDocs}
