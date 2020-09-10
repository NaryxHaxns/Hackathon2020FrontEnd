import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import "./App.css";
import CountdownClock from "../../components/CountdownClock/CountdownClock"
import FindCandidates from "../../components/FindCandidates/FindCandidates";
import FindPollLocation from "../../components/FindPollLocation/FindPollLocation";
import RegisterVoter from "../../components/RegisterVoter/RegisterVoter";
import WhatToBring from "../../components/WhatToBring/WhatToBring";
import Landing from "../../components/Landing/Landing"

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input className="searchBar"></input>
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
          <Route exact path='/FindPollLocation' render={() =>
            <FindPollLocation />
          } />
          <Route exact path='/RegisterVoter' render={() =>
            <RegisterVoter />
          } />
          <Route exact path='/WhatToBring' render={() =>
            <WhatToBring />
          } />
        </Switch>
      </div>
    );
  }
}
