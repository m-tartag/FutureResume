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
  render() {
    return (
      <div class="row ">
        <h4 class="align center">Login</h4>
        <form class="col s4 offset-m4">
          <div class="row ">
            <div class="input-field ">
              <input
                placeholder="Email"
                id="email"
                type="email"
                class="validate"
              />
              <span
                class="helper-text"
                data-error="wrong"
                data-success="right"
              />
              <input
                placeholder="Password"
                id="password"
                type="password"
                class="validate"
              />
              <span
                class="helper-text"
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
