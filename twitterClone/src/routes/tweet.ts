import express from "express";
import { PrismaClient } from '@prisma/client'
import { verifyToken } from "../utils/auth";
const prisma = new PrismaClient()
const router= express.Router();


router.post("/",verifyToken,async(req,res)=>{
    const {title,content} =req.body;
    const userid= req.user.id;
    let result=await prisma.twitt.create({
        data:{
            title,
            content,
            userid
        }
    })
    console.log(result);
    res.send({result:result});
})

router.get("/",verifyToken,async (req,res)=>{
     let alltweet=await prisma.twitt.findMany({
        include:{
            user:true  
        }
     });
     res.send({tweets:alltweet});
})
router.get("/:id",(req,res)=>{
    
})



export default router