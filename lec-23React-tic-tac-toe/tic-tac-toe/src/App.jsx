import { useState } from 'react';
import './App.css';

function App() {
  const [mark,setMark]=useState([null,null,null,null,null,null,null,null,null]);
  const[flag,setFlag]=useState(true);
  const[winner,setWinner]=useState("No winner");
  function checkWinner(mark){
    let winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let res="draw";
    winner.forEach((w)=>{
        if(mark[w[0]] && mark[w[0]]==mark[w[1]] && mark[w[0]]==mark[w[2]] ){
            res=mark[w[0]]  
        }
    })
   
    setWinner(res);


}
  function markChnageHandler(idx){
    // setMark("X");
    let newMark=[...mark];
    if(mark[idx]==null){
    newMark[idx]=flag?'X':'O';
    setFlag(!flag);
    setMark(newMark);
    checkWinner(newMark)
    }
  }
  return (
    <>
    <h1>Tic-tac-toe</h1>
    <div className="board">
    <div>
    <button onClick={()=>markChnageHandler(0)} style={{width:"50px",height:"50px"}}>{mark[0]}</button>
    <button onClick={()=>markChnageHandler(1)}style={{width:"50px",height:"50px"}}>{mark[1]}</button>
    <button onClick={()=>markChnageHandler(2)}style={{width:"50px",height:"50px"}}>{mark[2]}</button>
    </div>
    <div>
    <button  onClick={()=>markChnageHandler(3)}style={{width:"50px",height:"50px"}}>{mark[3]}</button>
    <button  onClick={()=>markChnageHandler(4)}style={{width:"50px",height:"50px"}}>{mark[4]}</button>
    <button  onClick={()=>markChnageHandler(5)}style={{width:"50px",height:"50px"}}>{mark[5]}</button>
    </div>
    <div>
    <button onClick={()=>markChnageHandler(6)} style={{width:"50px",height:"50px"}}>{mark[6]}</button>
    <button onClick={()=>markChnageHandler(7)} style={{width:"50px",height:"50px"}}>{mark[7]}</button>
    <button onClick={()=>markChnageHandler(8)} style={{width:"50px",height:"50px"}}>{mark[8]}</button>
    </div>
    <h1>Winner:{winner}</h1>
    </div>
    </>
  );
}

export default App;
