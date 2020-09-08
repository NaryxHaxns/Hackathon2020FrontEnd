import React, { Component } from "react";
import "./App.css";
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
      </div>
    );
  }
}
