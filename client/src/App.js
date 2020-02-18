import React, { Fragment } from "react";
import Navbar from "../src/components/layouts/Navbar";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
