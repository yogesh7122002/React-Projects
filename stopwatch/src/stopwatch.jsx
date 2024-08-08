import React, { useState, useEffect } from 'react';
import './App.css';

function Stopwatch() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (running) 
      {
      const id = setInterval(() => 
        {
        setTime(prevTime => 
        {
          let { hours, minutes, seconds, milliseconds } = prevTime;
          milliseconds += 10;

          if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds += 1;
          }
          if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
          }
          if (minutes >= 60) {
            minutes = 0;
            hours += 1;
          }
          return { hours, minutes, seconds, milliseconds };
        });
      }, 10);
      setIntervalId(id);

      return () => clearInterval(id);
    } else 
    {
      if (intervalId) clearInterval(intervalId);
    }
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  };

  const formatTime = (num) => num.toString().padStart(2, '0');

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <h1>{`${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}:${formatTime(Math.floor(time.milliseconds / 10))}`}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
