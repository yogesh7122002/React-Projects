import React, { useState } from 'react'
import './calculator.css'


function Calculator() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    const btext = event.target.innerText;

    if (btext === 'AC') {
      setInputValue('');
      return;
    }

    if (btext === '+/-') {
      if (inputValue.charAt(0) === '-') {
        setInputValue(inputValue.substring(1));
      } else {
        setInputValue('-' + inputValue);
      }
      return;
    }

    if (btext === '%') {
      if (inputValue !== '') {
        setInputValue((prev) => (parseFloat(prev) / 100).toString());
      }
      return;
    }

    if (
      ['+', '-', '×', '÷'].includes(btext) &&
      ['+', '-', '×', '÷'].includes(inputValue.slice(-1))
    ) {
      return;
    }

    if (btext === '=') {
      try {
        let result = inputValue;
        result = result.replace(/\×/g, '*').replace(/\÷/g, '/');
        const evaluatedResult = eval(result);

        if (isNaN(evaluatedResult) || !isFinite(evaluatedResult)) {
          setInputValue('Error');
        } else {
          setInputValue(evaluatedResult.toString());
        }
      } catch (error) {
        setInputValue('Invalid Expression');
      }
      return;
    }

    setInputValue((prev) => prev + btext);
  };

  const handleKeyPress = (event) => {
    const key = event.key;
    const allowedKeys = '0123456789+-*/.';

    if (allowedKeys.includes(key)) {
      setInputValue((prev) => prev + key);
    } else if (key === 'Enter') {
      handleSubmit({ target: { innerText: '=' } });
    } else if (key === 'Backspace') {
      setInputValue((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="grid-container" onKeyDown={handleKeyPress} tabIndex="0">
      <div className="grid-item first-row">
        <input type="text" placeholder="0" value={inputValue} readOnly />
      </div>

      <div onClick={handleSubmit} className="grid-item first">AC</div>
      <div onClick={handleSubmit} className="grid-item first">+/-</div>
      <div onClick={handleSubmit} className="grid-item first">%</div>
      <div onClick={handleSubmit} className="grid-item fourth">÷</div>

      <div onClick={handleSubmit} className="grid-item">7</div>
      <div onClick={handleSubmit} className="grid-item">8</div>
      <div onClick={handleSubmit} className="grid-item">9</div>
      <div onClick={handleSubmit} className="grid-item fourth">×</div>

      <div onClick={handleSubmit} className="grid-item">4</div>
      <div onClick={handleSubmit} className="grid-item">5</div>
      <div onClick={handleSubmit} className="grid-item">6</div>
      <div onClick={handleSubmit} className="grid-item fourth">-</div>

      <div onClick={handleSubmit} className="grid-item">1</div>
      <div onClick={handleSubmit} className="grid-item">2</div>
      <div onClick={handleSubmit} className="grid-item">3</div>
      <div onClick={handleSubmit} className="grid-item fourth">+</div>

      <div onClick={handleSubmit} className="grid-item zero">0</div>
      <div onClick={handleSubmit} className="grid-item">.</div>
      <div onClick={handleSubmit} className="grid-item fourth">=</div>
    </div>
  );
}

export default Calculator;
