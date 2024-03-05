import express from "express";
import { PrismaClient } from '@prisma/client'
import { createJwtToken } from "../utils/auth";
const prisma = new PrismaClient()
const router= express.Router();


router.post("/",async(req,res)=>{
   const {email,password} = req.body;
  let user= await prisma.user.findUnique({
    where:{
        email
    }
   })
   if(!user){
      throw new Error ("Not a valid email");
   }
   if(user.password!=password){
    throw new Error ("Not a valid password");
   }

   let token= createJwtToken(user);
   res.cookie("token",token);
   res.redirect("/");
   

})








export default router;