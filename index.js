const express = require("express")

const mongoose = require("mongoose")



//------------connecting------
const connect = (()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/E_commerce")
})

//-----------schema----------
const producSchema = new mongoose.Schema({
    colour:{type:String,required:true},
    product_name:{type:String,required:true},
    price:{type:Number,required:true},
    gender:{type:String,required:true}
})

//------model----------

const Prod = mongoose.model("pro",producSchema)

const app = express()

app.get("/prod",async(req,res)=>{
   // console.log("get listen")
    try{
    const pr = await Prod.find().lean().exec()
    return res.send(pr)
    }catch(err){
        console.log(err.message)
    }
})

app.post("/prod",(req,res)=>{
    console.log("poast lisnteb ")
})


app.listen(2435,async(req,res)=>{
    await connect()
    console.log("listning port from 2345")
})
