import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import useConuter from './useConuter'

function App() {
  // let [count, increment, dec] = useConuter()
  const [name,setName] = useState("")
  const handleSubmit = () => {
    // const name = document.getElementById('name').value
    const nameValue = document.getElementById('name').value;
    // console.log(name)
    setName(nameValue)
  document.getElementById('name').innerText="";

  }
  return (
    <>
      {/* <h1>{count}</h1>

      <button onClick={increment}>Inc</button>
      <button onClick={dec}>Dec</button> */}
      <input id='name' type="text" />
      <button onClick={handleSubmit}> Click Me</button>
      <p>Name: {name}</p>

    </>
  )
}

export default App
