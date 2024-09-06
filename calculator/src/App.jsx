import { useState } from 'react'

import './App.css'
import Calculator from './Component/Calculator';

function App() {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (event) => {
    const btext = event.target.innerText;
    if (btext == "AC") {
      setInputValue("")
      return
    }
    if (btext == "=") {
      const result = eval(inputValue)
      setInputValue(result)
      return
    }
    setInputValue((prev) => prev + btext)
  }

  return (
    <>

      {/* <div class="grid-container">
        <div class="grid-item first-row">
          <input type="text" placeholder='0' value={inputValue} readOnly />
        </div>


        <div onClick={handleSubmit} class="grid-item first">AC</div>
        <div onClick={handleSubmit} class="grid-item first">+/-</div >
        <div onClick={handleSubmit} class="grid-item first" >%</div >
        <div onClick={handleSubmit} class="grid-item fourth" >÷</div >


        <div onClick={handleSubmit} class="grid-item" > 7</div >
        <div onClick={handleSubmit} class="grid-item" > 8</div >
        <div onClick={handleSubmit} class="grid-item" > 9</div >
        <div onClick={handleSubmit} class="grid-item fourth" >×</div >


        <div onClick={handleSubmit} class="grid-item" > 4</div >
        <div onClick={handleSubmit} class="grid-item" > 5</div >
        <div onClick={handleSubmit} class="grid-item" > 6</div >
        <div onClick={handleSubmit} class="grid-item fourth" > -</div >

        <div onClick={handleSubmit} class="grid-item" > 1</div >
        <div onClick={handleSubmit} class="grid-item" > 2</div >
        <div onClick={handleSubmit} class="grid-item" > 3</div >
        <div onClick={handleSubmit} class="grid-item fourth" > +</div >

        <div onClick={handleSubmit} class="grid-item zero" > 0</div >
        <div onClick={handleSubmit} class="grid-item" >.</div >
        <div onClick={handleSubmit} class="grid-item fourth" >=</div >


      </div > */}

      <Calculator/>




    </>
  )
}

export default App




