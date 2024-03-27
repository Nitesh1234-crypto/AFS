import React from 'react'

const Todo = ({title,desc,isEdit}) => {
  return (
   isEdit?  <input type='text' ></input> :  <div className="container">
   <div className="title">{title}</div>
   <div className='desc'>{desc}</div>
 </div> 
  
  
  )
}

export default Todo

  
