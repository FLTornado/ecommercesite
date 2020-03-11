import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from "./Blog";
import SignIn from "./SignIn";
import Header from "./Header";

class Entry extends Component  {
  render() {
  return (
    <Router>
      <div>
        <Header title="买手机网"/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>          
          <Route path="/">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default Entry;