import React from 'react'

const TodoButton = ({id, editChangeHandler, todoDeleteHandler,isCheckedHandler ,isComplete}) => {
  return (
    <div>
        <button onClick={()=>todoDeleteHandler(id)}>❎</button>
        <input type="checkbox" name="" id="" checked= {isComplete} onClick={()=>{isCheckedHandler(id)}}/>
        <button onClick={editChangeHandler}>✏</button>
    </div>
  )
}

export default TodoButton
