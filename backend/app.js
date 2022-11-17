const express=require('express')
const cors=require('cors')
const logger=require('morgan')  //for seeing api calls in terminal
const PORT=9000
const mongoose=require('mongoose')
const app=new express()
app.use(express.json())  //to receive data from front end
app.use(express.urlencoded({extended:true}))
app.use(cors())  //to connect back and front without any distrbnce
app.use(logger('dev'))

mongoose.connect('mongodb+srv://Nufeejasameer:Ikkakku123@cluster0.d2fsqtu.mongodb.net/dataDB?retryWrites=true&w=majority')
.then((res,req)=>{
    console.log("Mongodb successfully connected")
})
.catch((req,res)=>{
    console.log("Mongodb not connected")
})
   
    




const api=require('./routes/api')
app.use('/api',api)



app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})