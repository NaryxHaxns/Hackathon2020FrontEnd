import React from "react";
import {Link} from 'react-router-dom';
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
        <Link to="/FindCandidates">
        <FindCandidates />
        </Link>
        <FindPollLocation />
        <Link to="/VotingFAQ">
        <WhatToBring />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
