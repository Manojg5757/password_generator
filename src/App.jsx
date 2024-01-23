import React, { useState } from 'react'

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

    <div>
      <h1>{password}</h1>
      <button onClick={Generate}>Generate</button>
    </div>
  )
}

export default App