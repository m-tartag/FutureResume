import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  About,
  Landing,
  Login,
  Navbar,
  Register,
  RegisterEmployer,
  RegisterUser,
  ResumeForm,
  // EmployerLogin
} from './components/layouts'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/resumeform' component={ResumeForm} />
            <Route exact path="/about" component={About} />
            <Route exact path='/login' component={Login} />
            {/* <Route exact path='/employerlogin' component={EmployerLogin} /> */}
            <Route exact path='/register' component={Register} />
            <Route exact path='/registeruser' component={RegisterUser} />
            <Route exact path='/registeremployer' component={RegisterEmployer} />

          </Switch>
        {/* <ResumeForm /> */}
      </div>
      </Router>
    );
  }
}

export default App;
