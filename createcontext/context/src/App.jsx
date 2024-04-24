import { useState , useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react';
const countContext = createContext(0);
const sonaKhaHai= createContext(null);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>I am APP component</h1>
    {/* <button onClick={()=> setCount(count+1)}>Click</button> */}
   {/* <countContext.Provider value={count}>
    <FirstChild  />
    </countContext.Provider> */}
    <GrandParent />
    
    </>
  )
}

// function FirstChild(){
//   return(
//     <>
//      <h1>
//       I am inside App component
//       <SecondChild/>
//     </h1>
//     </>
//   )
// }
// function SecondChild(){
//   return(
//     <>
//      <h1>I am inside FirstChild </h1>
//      <ThirdChild  />
//     </>
//   )
// }
// function ThirdChild(){
//   const value = useContext(countContext);
//   console.log(value);
//   return (
//     <>

//     <h1>I am inside Second child</h1>
//     <h1>{value}</h1>
//     </>
//   )
// }
function GrandParent(){
  return(
    <><h1>Dadaji</h1>
    <sonaKhaHai.Provider value="Bde W ke niche hai">
    <Parent />
    </sonaKhaHai.Provider>
    </>
  )
}
function Parent(){
  return(
    <><h1>Pitaji</h1>
    <Child />
    </>
  )
}
function Child(){
  let value=useContext(sonaKhaHai)
  return(
    <><h1>bacha</h1>
    <p>Sona {value}</p>
    </>
  )
}


export default App
