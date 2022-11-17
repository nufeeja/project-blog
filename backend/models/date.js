const mongoose=require('mongoose')

const Schema=mongoose.Schema

const studentSchema=new Schema({
   
    articlename:String,
    content:String,
    published:String,
    comments:String,
    follow:Number
    })

let articleDate=mongoose.model('studentdetail',studentSchema)

module.exports=articleDate