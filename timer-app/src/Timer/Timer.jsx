import React, { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
  const [second, setSeconds] = useState(0);
  const [die, setDie] = useState(false);
  useEffect(() => {
    if (die === false) {
      document.title = `Seconds ${second}`;
      var interval = setInterval(() => {
        setSeconds((second) => second + 1);
      }, 1000);
      console.log(second, die);
    }
    return () => {
      clearInterval(interval);
    };
  }, [second]);
  return (
    <div className="timer">
      <p>
        {die === false ? <h3>Seconds {second}</h3> : <h3>Time is stopped</h3>}
      </p>
      <button
        className="die-button"
        onClick={() => {
          setDie(true);
        }}
      >
        Die
      </button>
    </div>
  );
}
