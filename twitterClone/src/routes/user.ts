import express from "express";
import { PrismaClient } from '@prisma/client'
import { verifyToken } from "../utils/auth";
const prisma = new PrismaClient()
const router= express.Router();


router.post("/",async(req,res)=>{
console.log(req.body);
const {firstName ,lastName,email,password}= req.body;
let response=await prisma.user.create({
    data:{
        firstName ,lastName,email,password
    }
})
console.log(response);
res.send("user added");

})
router.get("/",async(req,res)=>{
   let users=await prisma.user.findMany();
   res.send({users});
})
router.get("/:id",async(req,res)=>{
    const {id} = req.body;
    let user=await prisma.user.findUnique({
        where:{
            id
        }
    })
    res.send({user});
})
router.get("/:username",async(req,res)=>{
    const {username} = req.body;
    let users=await prisma.user.findMany({
        where:{
            OR:[
               {
                firstName:{
                    contains:username
                },
                lastName:{
                    contains:username
                }
               }
            ]
        }
       
    })
    console.log({users});
})
router.delete("/:id",verifyToken,async(req,res)=>{
     const {id} = req.body;
     if(id!=req.user.id) return res.send("not a valid request");
    let result= await prisma.user.delete({
           where:{
            id
           }
    })
    res.send("user deleted");
})
router.put("/:id",verifyToken,(req,res)=>{

})

export default router;