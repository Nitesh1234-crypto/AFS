import React from 'react'
import { useRecoilValue } from 'recoil'
import { countatom } from '../store/atom'

const Countvalue = () => {
  let count=useRecoilValue(countatom)
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Countvalue
