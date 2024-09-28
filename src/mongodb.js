
const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27017/Store")
.then(()=>{
    console.log("MongoDB connected")
})
.catch(()=>{
    console.log("Fail to connect")
})

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection1",loginSchema);

module.exports=collection