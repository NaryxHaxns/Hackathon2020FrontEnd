import React from "react";
import './FindCandidates.css'

const ExploreCandidates = (props) => {
  return (
    <div className="ExploreCandidates">
      <div className="CandidatesPropositions">
        <button className="active">CANDIDATES</button>
        <button>PROPOSITIONS</button>
      </div>
      <div className="Roles">
          <button>President/Vice President</button>
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
