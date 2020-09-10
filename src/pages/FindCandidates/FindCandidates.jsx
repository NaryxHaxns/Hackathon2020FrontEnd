import React from "react";
import './FindCandidates.css'
import {Link} from 'react-router-dom';

const ExploreCandidates = (props) => {
  return (
    <div className="ExploreCandidates">
      <div className="CandidatesPropositions">
        <button className="active">CANDIDATES</button>
        <button>PROPOSITIONS</button>
      </div>
      <div className="Roles">
          <button><Link to="/FindCandidates/PresidentVicePresident">President/Vice President</Link></button>
          <button>U.S. House</button>
          <button>U.S. Senate</button>
          <button>State Senate</button>
          <button>State Assembly</button>
          <button>Local</button>
          <button>Local</button>
          <button>Local</button>
      </div>
    </div>
  );
};

export default ExploreCandidates;
