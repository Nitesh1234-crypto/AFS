const express= require("express")
const app = express()
const path= require("path")
const mongoose= require("mongoose")
const User= require("./model/user");
const bcrypt = require('bcrypt');
const cookieParser=require("cookie-parser");
const saltRounds = 10;
const {createJwtToken,verifyToken}=require("./auth/auth");
const { create } = require("hbs");

app.use(cookieParser());
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'hbs');
 app.get("/",verifyToken,(req,res)=>{
        res.render("home");
 })
 app.get("/signup",(req,res)=>{
    res.render("signup");
 })
 app.get("/login",(req,res)=>{
    res.render("login");
 })
 app.post("/signup",async(req,res)=>{
       const {email,password}=req.body;
       const hashpassword=await bcrypt.hash(password,saltRounds)
       const newUser= new User({email,password:hashpassword});
       await newUser.save();
       res.json(newUser);
 })
 app.post("/login",async(req,res)=>{
     const {email,password}=req.body;
     const user=await User.findOne({email});
     if(!user) return res.send("No user found!");
     bcrypt.compare(password, user.password).then(function(result) {
        if(result){
            let token=createJwtToken(user.toJSON());
            res.cookie("token",token);
            res.send({token:token});
        }
    });
    
 })


 mongoose.connect("mongodb://127.0.0.1:27017/g4jwt").then(()=>{
    app.listen(3344,()=>{
        console.log("server started at port 3334");
      })
 })
