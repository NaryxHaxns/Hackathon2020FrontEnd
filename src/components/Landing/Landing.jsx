import React from "react";
import CountdownClock from "../CountdownClock/CountdownClock";
import FindCandidates from "../FindCandidates/FindCandidates";
import FindPollLocation from "../FindPollLocation/FindPollLocation";
import RegisterVoter from "../RegisterVoter/RegisterVoter";
import WhatToBring from "../WhatToBring/WhatToBring";
import "./Landing.css";

const Landing = (props) => {
  return (
    <div className="Landing">
      <CountdownClock />
      <div className="LandingPages">
        <RegisterVoter />
        <FindCandidates />
        <FindPollLocation />
        <WhatToBring />
      </div>
    </div>
  );
};

export default Landing;
