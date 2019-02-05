import React, { Component } from "react";
import logo from "./logo.svg";
import "./stylesheets/app.css";

import Landing from "./components/container/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
