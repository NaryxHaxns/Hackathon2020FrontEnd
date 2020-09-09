import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import "./App.css";
import CountdownClock from "../../components/CountdownClock/CountdownClock"
import FindCandidates from "../../components/FindCandidates/FindCandidates";
import FindPollLocation from "../../components/FindPollLocation/FindPollLocation";
import RegisterVoter from "../../components/RegisterVoter/RegisterVoter";
import WhatToBring from "../../components/WhatToBring/WhatToBring";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Election 2020</h1>
        </header>
        <Switch>
          <Route exact path='/' render={() =>
            <CountdownClock />
          } />
          <Route exact path='/' render={() =>
            <FindCandidates />
          } />
          <Route exact path='/' render={() =>
            <FindPollLocation />
          } />
          <Route exact path='/' render={() =>
            <RegisterVoter />
          } />
          <Route exact path='/' render={() =>
            <WhatToBring />
          } />
        </Switch>
      </div>
    );
  }
}
