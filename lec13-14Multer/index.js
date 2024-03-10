const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const path= require("path")
const mongoose = require("mongoose");
const Image= require("./model/image");
const app = express()
const cloudinary=require("cloudinary");
cloudinary.config({ 
  cloud_name: 'drojytxaq', 
  api_key: '649713726112965', 
  api_secret: 'mHrVTaJQzx6VQc3_62eAnNUPrdg' 
});
app.set("view engine","hbs");
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.post("/uploads",upload.single('avatar'),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const {filename} =req.body;
    const {path} =req.file;
    const newImage= new Image({imagename:filename,path:path})
    await newImage.save()
    let result=await cloudinary.uploader.upload(path,
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });
  console.log(result);
    res.send("file uploaded");

})

app.get("/",async(req,res)=>{
    const imageData = await Image.find({});
    res.render("blog",{image:imageData});
})
app.get("/form",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})






mongoose.connect("mongodb://127.0.0.1:27017/multerg4").then(()=>{
    app.listen(4000,()=>{
        console.log("server started")
    })
})
