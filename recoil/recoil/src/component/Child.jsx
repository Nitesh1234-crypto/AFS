import React from 'react'
import Countvalue from './Countvalue'
import Button from './Button'

const Child = () => {
    console.log("child")
  return (
    <div>
      <Countvalue />
      <Button />
    </div>
  )
}

export default Child
