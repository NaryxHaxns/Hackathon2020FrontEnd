import React from "react";

const CountdownClock = (props) => {
  const electionDate = "2020-11-03";

  function getCountdown(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id)
    const timeinterval = setInterval(() => {
        const t = getCountdown(endtime);
        clock.innerHTML = 'days: ' + t.days + '<br>' +
        'hours: ' + t.hours + '<br>' +
        'minutes: ' + t.minutes + '<br>' +
        'seconds: ' + t.seconds;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    },1000);
  }

  return (
    <div id="CounterClock">

    </div>
  );
};

export default CountdownClock;
