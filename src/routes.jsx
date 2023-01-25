import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./container/Landing/Landing";
import Playback from "./container/playback/Playback";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/watch" component={Playback} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default Routes;
