import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import Password from './Password'


// const [count, setCount] = useState(0)
// const [length,setlength] = useState(8)
// const [numAllow, addNum] = useState(false)
// const [charAllow, addChar] = useState(false)
// const[password, setPassword] = useState("")

// const genPass = useCallback(()=>{
//   let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   if(numAllow){
//     characters+="0123456789"

//   }
//   if(charAllow){
//     characters+="!@#$&*%"
//   }
//   for (let index = 1; index <=length; index++) {
//     const element = array[index];

//   }

// },[length,numAllow,charAllow,setPassword])


//     {/* <div className='text-white' > */}
{/* <h1 className='text-white text-4xl font-bold'>Password Generator</h1> */ }

//   {/* </div> */}
{/* <Password /> */ }






function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // password Refrance 
  const passwordRef = useRef(null)

  const copyToClip = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]) 

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$%&*!?"
    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, setPassword, charAllowed])
  useEffect(() => {
    passwordGenerator()

  }, [length, numberAllowed, setPassword, charAllowed, passwordGenerator])

  return (
    < >
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-6 my-8  text-orange-500 bg-gray-700'>

        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input
            type="text"
            value={password} ref={passwordRef}
            className='outline-none w-full py-2 px-3 my-3 rounded-md' placeholder='Password' />

          <button className="button-copy" onClick={copyToClip}>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-3 m-3 mb-3'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e) => {
              setlength(e.target.value)
            }} />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
              setNumberAllowed((prev) => !prev);
            }} className='' /> <label for="">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} className='' /> <label for="">Special Character</label>
          </div>


        </div>


      </div>


    </>
  )
}
export default App
