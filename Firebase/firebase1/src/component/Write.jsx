import app from "../firebaseConfig";
import React from 'react'
import { getDatabase, ref, set } from "firebase/database";

const Write = () => {
   let db= getDatabase(app);
   let dbref=ref(db,"Animal/lion");
   set(dbref,{
    name:"ahdahd",
    age:"27"
   }).then((data)=>{
        console.log(data);
   }).catch((err)=>console.log(err));
  return (
    <div>
      write data
    </div>
  )
}

export default Write
