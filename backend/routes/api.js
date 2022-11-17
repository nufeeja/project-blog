const express=require('express')
const router=express.Router()
const DATA=require('../models/date')



//get date
// router.get('/home',async(req,res)=>{
//     const data=await DATA.find()
//     console.log(data)
//     res.send(data)
// })

router.get('/blog',async(req,res)=>{
    try {
        const list=await DATA.find()
        res.send(list)
    } 
    catch (error) {
        console.log(error)
    }
    })
    router.post('/blog',async(req,res)=>{
        try {
        let item={    //to fetch and save data from frontend and in server
            articlename:req.body.articlename,
            content:req.body.content,
            comments:req.body.comments,
            published:req.body.published,
            follow:req.body.follow
        }
        const newblog=new DATA(item)  //to check incoming data
        const saveblog=await newblog.save()
        res.send(saveStudent)
        }
         catch (error) {
            
        }
    }
    )
module.exports=router