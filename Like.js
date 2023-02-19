import React, { useState } from 'react'

export default function App() {
  const [Soul,setSoul]= useState(0)
  const incrementOne =()=>{
    setSoul(Soul+1)
  }
 
  return (
    <div>
      
      <button onClick={incrementOne}><h1>Like{Soul}</h1></button>
      <button onClick={()=>{setSoul(Soul-1)}}><h2>Unlike</h2></button>
      
    </div>
  )
}
