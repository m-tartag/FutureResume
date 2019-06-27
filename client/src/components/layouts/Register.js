import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  

  return (
    <Fragment>
      <div style={{ height: "100vh" }} className="container valign-wrapper">
        <div className="row ">
          <div className="col s12 center align">
            <div>
              <h1 className="col s7center align">Choose Account Type:</h1>
            </div>
            <Link
              to="/RegisterUser"
              className="waves-effect waves-light btn-large"
              style={{ margin: "5px" }}
            >
              User
            </Link>
            <Link
              to="/RegisterEmployer"
              className="waves-effect waves-light btn-large"
              style={{ margin: "5px" }}
            >
              Employer
            </Link>
          </div>
        </div>
      </div>
      </Fragment>
    );
  }


export default Register;
