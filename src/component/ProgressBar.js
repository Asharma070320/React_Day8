import React from 'react'
import './ProgressBar.css'

const ProgressBar = (props) => {
  return (
    <div>
    <div className='progessContainer'>
      <div className='load' style={{
        width:`${props.sendNumber}%`
      }}>{props.sendNumber}%
      </div>
    
     </div>
     <h1 className='set'>{props.sendMessage}</h1>
    </div>
  )
}

export default ProgressBar
