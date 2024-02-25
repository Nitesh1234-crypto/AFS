import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//insert

async function insertData(email:string,name:string){
   let result=await prisma.user.create({
        data:{
            email,
            name
        }
    })
    console.log(result)

}
// insertData("rcvinayak@gmail.com","rcvinayak");

async function readData(email:string){
    let userdata= await prisma.user.findUnique({
        where:{
            email
        }
    })
    console.log(userdata);
}
// readData("rcvinayak@gmail.com")
