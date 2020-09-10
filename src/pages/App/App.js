import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import "./App.css";
import CountdownClock from "../../components/CountdownClock/CountdownClock"
import FindCandidates from "../FindCandidates/FindCandidates";
import FindPollLocation from "../../components/FindPollLocation/FindPollLocation";
import RegisterVoter from "../../components/RegisterVoter/RegisterVoter";
import WhatToBring from "../../components/WhatToBring/WhatToBring";
import Landing from "../../components/Landing/Landing"
import President from "../President/President"
import CandidateShow from '../CandidateShow/CandidateShow'
import VotingFAQ from '../FAQ/FAQ'

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img className="iconBallot" src="https://i.imgur.com/52VN8Eo.png"></img>
          </Link>
          <input className="searchBar"></input>
          <img className="hambug" src="https://i.imgur.com/3T1942U.png"></img>
        </header>
        <Switch>
          <Route exact path='/' render={() =>
            <Landing />
          } />
          <Route exact path='/Clock' render={() =>
            <CountdownClock />
          } />
          <Route exact path='/FindCandidates' render={() =>
            <FindCandidates />
          } />
          <Route exact path='/FindCandidates/PresidentVicePresident' render={() =>
            <President />
          } />
          <Route exact path='/FindCandidates/PresidentVicePresident/LearnMore' render={() =>
            <CandidateShow />
          } />
          <Route exact path='/FindPollLocation' render={() =>
            <FindPollLocation />
          } />
          <Route exact path='/RegisterVoter' render={() =>
            <RegisterVoter />
          } />
          <Route exact path='/VotingFAQ' render={() =>
            <VotingFAQ />
          } />
        </Switch>
      </div>
    );
  }
}
