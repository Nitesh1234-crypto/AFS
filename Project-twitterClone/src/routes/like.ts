import express from "express";
import { PrismaClient } from '@prisma/client'
import { verifyToken } from "../utils/auth";
const prisma = new PrismaClient()
const router= express.Router();
router.post("/:id",verifyToken,async(req,res)=>{
    let {id} =req.params;
    const userid = req.user.id;
      let like =await prisma.like.findFirst({
          where:{
            tweetid:Number(id),
            userid:userid
          }
      })
      if(like!=null){
           await prisma.like.delete({
            where:{
                id:like.id
            }
           })
           await prisma.twitt.update({
            where:{
                id:Number(id)
            },
            data:{
                likeCount:{
                    decrement:1
                }
            }
           })
           return res.send("tweet unliked");
      }

  let newlike=  await prisma.like.create({
        data:{
            tweetid:parseInt(id),
            userid:userid
        }

    })
    await prisma.twitt.update({
        where:{
            id:Number(id)
        },
        data:{
            likeCount:{increment:1}
        }
    })
    res.send({newlike});
})

router.get("/:id",verifyToken,async(req,res)=>{
    const {id} = req.params
  let like= await prisma.like.findMany({
        where:{
            tweetid:Number(id)
        },
        select:{
            user:true
        }

    })
    res.send({like});
})


export default router