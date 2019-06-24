import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }} className="container valign-wrapper">
        <div className="row ">
          <div className="col s12 center align">
            <div>
              <h1 className="col s7center align">Future Resume</h1>
            </div>
            <Link
              to="/Register"
              class="waves-effect waves-light btn-large"
              style={{ margin: "5px" }}
            >
              Register
            </Link>
            <Link
              to="/Login"
              class="waves-effect waves-light btn-large blue"
              style={{ margin: "5px" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
