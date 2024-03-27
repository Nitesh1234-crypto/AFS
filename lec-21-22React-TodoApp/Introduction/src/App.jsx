import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './component/Todo'
import TodoButton from './component/TodoButton'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  let [title,setTitle]=useState("");
  let [desc,setDesc]=useState("");
  let [isEdit,setIsEdit]= useState(false);

  console.log(todo);
   
  function todoChangeHandler(){
    // todo= todo.push({title:"football",desc:"play football"});//ye nhi krna hai donot change previous state
    let id= todo.length;
     let  todoobj= {id:id,title:title,desc:desc,complete:false};
     let newTodo=[...todo,todoobj] //spreadoperator to copy arr;
     setTodo(newTodo);
     setTitle("");
     setDesc("");
  }
  function titleChangeHandler(e){
     setTitle(e.target.value);
    console.log(title)
  }
  function descChangeHandler(e){
    setDesc(e.target.value);
    console.log(desc);
  }
  function formSubmitHandler(e){
    e.preventDefault();
  }
  function todoDeleteHandler(id){
    let newTodo= todo.filter((t)=> t.id!=id)
    setTodo(newTodo)
  }
  function isCheckedHandler(id){
    let newtodo= todo.map((t)=> {
      if(t.id==id){
       let newT= {...t};
       newT.complete= !t.complete;
       return newT;
      }else{
        return t;
      }
    })
    console.log(newtodo);
    setTodo(newtodo)

  }
  function editChangeHandler(){
    setIsEdit(!isEdit);
  }
 

  return (
   <>
    <form action="" onSubmit={formSubmitHandler}>
      <input type="text" value={title} name="" id="" onChange={titleChangeHandler} />
      <input type="text" value={desc} name="" id=""  onChange={descChangeHandler}  />
      <button onClick={todoChangeHandler}>Add</button>
    </form>

  
     <div className='todolist'>
      {todo.map((t)=>{
        return (
          <>
          <Todo key={t.id} title={t.title} desc={t.desc} isEdit={isEdit}/>
          <TodoButton editChangeHandler={editChangeHandler} isCheckedHandler={isCheckedHandler} isComplete={t.complete} todoDeleteHandler={todoDeleteHandler} id={t.id}></TodoButton>
          </>
        )
      })}
     </div>
     </>
     
    
  )
}

export default App
