import React from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

const FAQ = (props) => {
  return (
    <div className="FAQ">
      <div className="returnLink">
        <Link to="/">
          <h4>{"< "}Back to Candidates</h4>
        </Link>
      </div>
      <div className="stepFAQ">
        <h1>FAQs | How to vote this November</h1>
        <p>
          Sometimes people get turned off from voting because they don't have
          the right information. Here are answers to some common questions about
          voting.
        </p>

        <div className="questionsList">
          <div className="question">
            <h3 className="title">Who can vote?</h3>
          </div>
          <div className="question">
            <h3 className="title">Preparing to vote</h3>
          </div>
          <div className="question">
            <h3 className="title">When you vote</h3>
            <div className="expanded">
              <ul>
                <li>Is voting like a test, or can I bring notes?</li>
                <p>
                  Voting is not like a test. You can bring the list of
                  candidates you compile here into the voting booth with you
                </p>
                <li>Do I have to go to my polling place to vote?</li>
                <p>
                  No. Anyone can choose to vote at home by mail. To vote by
                  mail, you use an "absentee ballot." Click here to learn about
                  voting at home by mail. In many counties, you may go in person
                  and vote early, starting 29 days before Election Day. To see
                  if you can vote early, check with your county elections
                  office.
                </p>
                <li>Do I have to bring my ID to the polls?</li>
                <p>
                  If you are a first-time voter who registered by mail, you
                  might be asked to show your ID. But most voters do not need to
                  have their ID. You just sign your name on the list of voters
                  to verify who you are.
                </p>
                <li>
                  I have a disability. Can I bring an aide or family member in
                  the voting booth to help me?
                </li>
                <p>
                  Yes. You also have the right to accommodations that provide
                  you access to vote. For example, you can ask for "curbside
                  voting" so you do not have to leave you car. Check the Voter
                  Bill of Rights for more information.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
