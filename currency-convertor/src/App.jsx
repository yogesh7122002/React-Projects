import { useState } from 'react'
import Input from './assets/components/InputBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Input/>
    </>
  )
}

export default App

