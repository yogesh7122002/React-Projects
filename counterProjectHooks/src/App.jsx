import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)
  function notnegative() { setCounter(0) }
  function maxLimit () {setCounter(20)}

  // let counter = 9
  const addValue = () => {
    console.log("Value Added :", counter)
    // counter = counter+1

    setCounter(counter + 1)
    if (counter >= 20) {
      console.log("you Have reached max limit")
      maxLimit()
  
    }
  }
  const subValue = () => {
    console.log("Value Subtracted :", counter)
    // counter = counter-1

    setCounter(counter - 1)
    if (counter <= 0) {
      notnegative()
    }


  }

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter Value : {counter}</h3>
      <button id='add' onClick={addValue}>Add value</button> <br /><br />
      <button id='sub' onClick={subValue}>Add value</button>
    </>
  )
}

export default App
