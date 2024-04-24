import React from 'react'
import { countatom } from '../store/atom';
import { useRecoilState, useSetRecoilState } from 'recoil';

const Button = () => {
    // const [count, setCount] = useRecoilState(countatom);
   let setCount= useSetRecoilState(countatom)
    // console.log("button")
  return (
    <div>
      <button onClick={()=>setCount((count)=>count+1)}>Inc</button>
      <button onClick={()=>setCount((count)=>count-1)}>Dec</button>
    </div>
  )
}

export default Button
