import express from "express";
import { PrismaClient } from '@prisma/client'
import { verifyToken } from "../utils/auth";
const prisma = new PrismaClient()
const router= express.Router();
router.post("/:tweetid",verifyToken,async(req,res)=>{
     const {tweetid}  = req.params
     const userid= req.user.id;
     let retweeted = await prisma.retweet.findFirst({
        where:{
          tweetid: Number(tweetid),
          retweetby: userid
        }
     })   
     if(retweeted!=null){
       return res.send({alredyretweeted:true});
     }
     let result=await prisma.retweet.create({
        data:{
            tweetid:Number(tweetid),
            retweetby:userid
        }
     })
     await prisma.twitt.update({
        where:{
            id:Number(tweetid)
        },
        data:{
            retweetCount:{increment:1}
        }
     })
     res.send({result});

})
router.delete("/:tweetid",verifyToken,async(req,res)=>{
    const {tweetid} = req.params
    const userid = req.user.id
   let retweet = await prisma.retweet.findFirst({
          where:{
            tweetid:Number(tweetid),
            retweetby:userid
          }
   })
   if(retweet!=null){
    let response=await prisma.retweet.delete({
        where:{
           id:Number(tweetid),
           retweetby:userid
        }
        })
         await prisma.twitt.update({
            where:{
                id: response.tweetid
            },
            data:{
                retweetCount:{decrement:1}
            }
        })
        res.send({undo:true})
    }

    res.send("retweet does not exist");
   
 

})


export default router