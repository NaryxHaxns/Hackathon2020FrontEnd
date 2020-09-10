import React from "react";
import "./CandidateShow.css";
import { Link } from "react-router-dom";

const CandidateShow = (props) => {
  return (
    <div className="CandidatePresidentPage">
      <div className="returnLink">
        <h4>{"< "}Back to Presidential Candidates</h4>
      </div>
      <div className="ChunkShow">
        <img src="https://i.imgur.com/PZt29dn.png" />
        <div className="candidatedetail">
          <h4>Lawrence "Chunk" Cohen</h4>
          <h6>Political Party: Libertarian</h6>
          <button>View All Policies</button>
        </div>
      </div>
      <div className="candidateStory">
        <p>
          Chunk Cohen is the 2020 Libertarian Party presidential nominee. He was
          nominated at the Libertarian National Convention on May 23, 2020.{" "}
          <br />
          <br />
          Cohen framed his campaign as an alternative to the Democratic and
          Republican policies. He believes these policies have created
          trillion-dollar deficits and led to involvement in expensive and
          deadly foreign wars. "Big government mandates and programs created
          these problems. To solve them, we need to make government smaller –
          much, much smaller.
          <br />
          <br />
          "Lorem ipsum dolor sit amet, evertitur definiebas signiferumque has
          ei, vix ut aperiam qualisque honestatis, eum wisi nullam ne. Probo
          adipisci constituam no mea, nominati theophrastus ius an. Et mei viris
          electram, at vix etiam elitr corpora, vix movet verterem et. Duo cu
          quas quaerendum, ius recusabo consulatu te.
        </p>
      </div>
      <div className="runningMate">
        <p>
          His running mate is entrepreneur and inventor Richard “Data” Wang.
        </p>
        <img src="https://i.imgur.com/fO0ygzD.png"/>
      </div>
      <div className="officialSite">
          <Link className="officialSiteLink">View Official Campaign Website</Link>
      </div>
      <div className="candidateButtons">
          <button>View All Candidates</button>
          <button className="cartButton">Add Candidate to My List</button>
      </div>
    </div>
  );
};

export default CandidateShow;
