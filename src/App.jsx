import React, { useState } from 'react'
import './App.scss'

const App = () => {

  const char = "abcdefghijklmnopqrstuvwxyz1234567890'@#$&*."

  const [password,setPassword] = useState("")

  
  const Generate = ()=>{
    let newPassword = ''
    
  
    for(let i=0;i<=10;i++){
      let random = Math.floor(Math.random()*char.length)
       newPassword += char[random]
    }
    setPassword(newPassword)
  }
  return (

    <div className='container'>
      <h1>Password Generator</h1>
      <h2>{password}</h2>
      <div className="buttons">
      <button onClick={Generate}>Generate</button>
      <button onClick={()=>setPassword('')}>Clear</button>
      </div>
    </div>
  )
}

export default App