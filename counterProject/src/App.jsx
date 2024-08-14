import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(12);
  
function addValue(){
  // console.log("Yogesh Trying To add Value",Math.floor(Math.random()*10,2))
  setCounter(Counter+1)
}
function subtractValue() {
  setCounter(Counter - 1);
}

  return (
    <>
     <h2>Yogesh Learning React</h2>
     <h2>Counter Value : {Counter}</h2>
     <button onClick={addValue}>Value += 1</button>
     <br/>
     <br/>
     <button onClick={subtractValue}>Value -= 1</button>

    </>
  )
}

export default App
