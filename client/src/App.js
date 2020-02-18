import React, { Fragment } from "react";
import Navbar from "../src/components/layouts/Navbar";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import QuestionState from "./Context/Questions/QuestionState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//import QuestionContext from "./Context/Questions/QuestionsContext";
const App = () => {
  return (
    <QuestionState>
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
    </QuestionState>
  );
};

export default App;
