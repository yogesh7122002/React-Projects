
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
  const [isRunning, setIsRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(prevTime => {
          let { hours, minutes, seconds, milliseconds } = prevTime;
          milliseconds += 10;
          if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds += 1
          }
          if (seconds >= 60) {
            seconds = 0
            minutes += 1;
          }
          if (minutes >= 60) {
            minutes = 0
            hours += 1;
          }
          return { hours, minutes, seconds, milliseconds }
        });

      }, 10)
      setIntervalId(id);
    } else {
      if (intervalId) clearInterval(intervalId);
    }

  }, [isRunning])




  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  };
  const formatTime = (num) => num.toString().padStart(2, '0');




  return (
    <>
      <h2>Stop Watch</h2>
      <h1>{`${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}:${formatTime(time.milliseconds / 10)}`}</h1>
      <button onClick={start}>Start</button> &nbsp;&nbsp;&nbsp;
      <button onClick={stop}>Stop</button>&nbsp;&nbsp;&nbsp;
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
