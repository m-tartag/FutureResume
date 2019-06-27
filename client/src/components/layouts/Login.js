import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }
    onSubmit(e) {
    e.preventDefault();
    alert('It works!')
    };




  
  render() {
    return (
      <div className="row ">
        <h4 className="align center">Login</h4>
        <form onSubmit={this.onSubmit} className="col s4 offset-m4">
          <div className="row ">
            <div className="input-field ">
              <input
                placeholder="Email"
                id="email"
                type="email"
                className="validate"
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              />
              <input
                placeholder="Password"
                id="password"
                type="password"
                className="validate"
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              />
            </div>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable green accent-3 align right"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
