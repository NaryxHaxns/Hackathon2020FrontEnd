import React, { useEffect, useState } from "react";
import './CountdownClock.css'

const CountdownClock = (props) => {
  //findTimeRemaining function
  const findTimeRemaining = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`11/03/${year}`) - +new Date();
    let timeRemaining = {};
    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeRemaining;
  };
  //end function

  const [timeRemaining, setTimeRemaining] = useState(findTimeRemaining());

  //UseEffect function
  useEffect(() => {
    setTimeout(() => {
      setTimeRemaining(findTimeRemaining());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeRemaining).forEach((interval) => {
    if (!timeRemaining[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeRemaining[interval]} {interval}{" "}
      </span>
    );
  });

  //end funciton

  //return
  return (
    <div>
      <h1>Election Day Countdown</h1>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>It's Time To Vote!</span>
      )}
    </div>
  );
  //end return
};

export default CountdownClock;
