import { useState ,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [random, setRandom] = useState("Nitesh")
  function randomValueGenerator(){
   let value= Math.random();
   setRandom(value)
  }
  return (
    <div>
    <button onClick={randomValueGenerator}>Change first name</button>
    <Name name={random} />
    <Name name = "Ritik" />
    <Name name = "Ritik" />
    <Name name = "Ritik" />

    </div>
  )
}
// function Namewithbutton(){
//   const [random, setRandom] = useState("Nitesh")
//   function randomValueGenerator(){
//    let value= Math.random();
//    setRandom(value)
//   }
//   return(
//   <>
//   <button onClick={randomValueGenerator}>Change first name</button>
//   <Name name={random} />
//   </>
//   )
  
// }
// function Name({name}){

// return (
//   <>
//   <h1>my name is {name}</h1>
//   </>
// )
// }
const Name = memo(function Name({name}){
  return (
    <>
    <h1>my name is {name}</h1>
    </>
  )
  });

export default App
