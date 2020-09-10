import React from "react";
import { Link } from "react-router-dom";
import "./President.css";

const President = (props) => {
  return (
    <div className="PresidentPage">
      <div className="returnLink">
        <h4>{"< "}Back to Candidates & Measures</h4>
      </div>
      <div className="PresLogo">
        <img src="https://i.imgur.com/KuJWt5t.png" />
      </div>
      <div className="pageTitle">
        <h1>All Presidential Candidates</h1>
      </div>
      <div className="Chunk">
        <img src="https://i.imgur.com/PZt29dn.png" />
        <div className="candidateIntro">
          <p>
            Chunk Cohen is the 2020 Libertarian Party presidential nominee. He
            was nominated at the Libertarian National Convention on May 23,
            2020.
          </p>
          <Link className="LearnMore" to="/findcandidates/presidentvicepresident/learnmore">
            Learn More
          </Link>
        </div>
      </div>
      <hr />
      <div className="Sloth">
        <img src="https://i.imgur.com/FgbdcFE.png" />
        <div className="candidateIntro">
        <p>
          Sloth Fratelli is the 2020 Green Party Presidential nominee. He was
          nominated on June 21, 2020, after winning more than 176 delegates
          across Green Party primaries and caucuses.
        </p>
        <Link className="LearnMore" to="/">
            Learn More
          </Link>
        </div>
      </div>
      <hr />
      <div className="Mouth">
        <img src="https://i.imgur.com/VJYivoj.png" />
        <div className="candidateIntro">
        <p>
          Mouth Devereaux is a former Democratic Vice President of the United
          States. He became the presumptive Democratic nominee on April 8, 2020.
        </p>
        <Link className="LearnMore" to="/">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default President;
