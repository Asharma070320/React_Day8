import React, { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './component/ProgressBar'

const App = () => {

  let[number,setNumber]= useState(0);
  let[msg,setMsg] = useState("Loading...🔎")

  useEffect(()=>{
    let inter = setInterval(()=>{
      if(number<100){
        setNumber(prevNumber => prevNumber+1);
      }else{
        clearInterval(inter);
        setMsg('Completed😎')
      }
    },300);
    return ()=> clearInterval(inter);
  },[number])

  return (
    
    <div className='container'>
      <div className="miniContainer">
        <h3 style={{textAlign:'center',textDecoration:'underLine',textShadow:'2px 2px 7px white'}}>Progress Bar</h3>
        <ProgressBar sendNumber={number} sendMessage={msg} />
      </div>
    </div>
  )
}

export default App
