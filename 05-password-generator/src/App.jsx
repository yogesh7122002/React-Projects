import { useCallback, useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [length,setlength] = useState(8)
  const [numAllow, addNum] = useState(false)
  const [charAllow, addChar] = useState(false)
  const[password, setPassword] = useState("")

  const genPass = useCallback(()=>{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow){
      characters+="0123456789"

    }
    if(charAllow){
      characters+="!@#$&*%"
    }
    for (let index = 1; index <=length; index++) {
      const element = array[index];
      
    }

  },[length,numAllow,charAllow,setPassword])

  return (
    < >
      {/* <div className='text-white' > */}
     <h1 className='text-white text-4xl font-bold'>Password Generator</h1>

    {/* </div> */}



    </>
  )
}

export default App
