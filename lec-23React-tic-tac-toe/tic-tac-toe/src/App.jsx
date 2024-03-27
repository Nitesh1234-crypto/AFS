import { useState } from 'react';
import './App.css';

function App() {
  const [mark, setMark] = useState(Array(9).fill(null));
  const [flag, setFlag] = useState(true);

  function markChangeHandler(idx) {
    if (mark[idx] === null) {
      const newMark = [...mark];
      newMark[idx] = flag ? 'X' : 'O';
      setMark(newMark);
      setFlag(prevFlag => !prevFlag);
    }
  }

  return (
    <div className="board">
      {mark.map((value, idx) => (
        <button key={idx} onClick={() => markChangeHandler(idx)} className="square">
          {value}
        </button>
      ))}
    </div>
  );
}

export default App;
