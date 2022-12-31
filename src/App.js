import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  lang = "react";
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/general"><News pageSize={6} country="in" category="general" /></Route>
            <Route path="/buisiness"><News pageSize={6} country="in" category="buisiness" /></Route>
            <Route path="/entertainment"><News pageSize={6} country="in" category="entertainment" /></Route>
            <Route path="/health"><News pageSize={6} country="in" category="health" /></Route>
            <Route path="/science"><News pageSize={6} country="in" category="science" /></Route>
            <Route path="/sports"><News pageSize={6} country="in" category="sports" /></Route>
            <Route path="/technology"><News pageSize={6} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
