import React, { useEffect, useState } from "react";
import "./CountdownClock.css";

const CountdownClock = (props) => {
  //findTimeRemaining function
  const findTimeRemaining = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`11/03/${year}`) - +new Date();
    let timeRemaining = {};
    if (difference > 0) {
      timeRemaining = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
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
    <div className="CountdownClock">
      <h1 className="clockTitle">Election Day Countdown</h1>
      <div className="clockParent">
        <div className="clockDays">
          <h1>{timeRemaining.Days}</h1>
          <h3>Days</h3>
        </div>
        <div className="clockHours">
          <h1>{timeRemaining.Hours}</h1>
          <h3>Hours</h3>
        </div>
        <div className="clockMinutes">
          <h1>{timeRemaining.Minutes}</h1>
          <h3>Min</h3>
        </div>
        <div className="clockSeconds">
          <h1>{timeRemaining.Seconds}</h1>
          <h3>Sec</h3>
        </div>
      </div>
    </div>
  );
  //end return
};

export default CountdownClock;
