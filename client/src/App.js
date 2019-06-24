import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import Navbar from "./components/layouts/Navbar";
import ResumeForm from "./components/layouts/ResumeForm";
import About from "./components/layouts/About";
import Login from "./components/layouts/Login";
import Register from "./components/layouts/Register";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/resumeform" component={ResumeForm} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          {/* <ResumeForm /> */}
        </div>
      </Router>
    );
  }
}

export default App;
