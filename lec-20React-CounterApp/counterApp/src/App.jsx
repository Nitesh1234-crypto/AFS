import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function buttonClickHandler(){
    setCount(count+1);
  }
  return (
    <>
      <div className="card">
        <button onClick={buttonClickHandler}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
