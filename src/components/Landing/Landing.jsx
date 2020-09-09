import React from "react";
import CountdownClock from '../CountdownClock/CountdownClock'
import FindCandidates from "../FindCandidates/FindCandidates";
import FindPollLocation from "../FindPollLocation/FindPollLocation";
import RegisterVoter from "../RegisterVoter/RegisterVoter";
import WhatToBring from "../WhatToBring/WhatToBring";

const Landing = (props) => {
  return (
    <div className="Landing">
      <CountdownClock />
      <FindCandidates />
      <FindPollLocation />
      <RegisterVoter />
      <WhatToBring />
    </div>
  );
}

export default Landing;