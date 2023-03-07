import styles from './Stopwatch.module.scss'
import Button from '../Button/Button';
import React, { useState, useEffect } from "react";

  
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className={styles.timer}>
      <div className={styles.numbers}>
        <span>{("0" + Math.floor((time / 1000 / 60 / 60) % 24)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000 / 60) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 1000))).slice(-2)}</span>
      </div>
      <div>
        <Button onClick={() => setRunning(true)}>Start</Button>
        <Button onClick={() => setRunning(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>
      </div>
    </div>
  );
};

export default Stopwatch