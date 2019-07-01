import React, { Component } from "react";
import axios from "axios";

class EmployerLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post('/api/employer/login', userData)
        .then(res => {
          if (res.status !==200){
            res.json()
            .then(res => console.log(res))
          } else {
            console.log(res.data)
          }
        });
  };
  
    render() {
        return (
            <div className="row ">
        <h4 className="align center">Employer Login</h4>
        <form onSubmit={this.onSubmit} className="col s4 offset-m4">
          <div className="row ">
            <div className="input-field ">
              <input
                onChange={this.onChange}
                value={this.state.email}
                placeholder="Email"
                id="email"
                type="text"
                className="validate"
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              />
              <input
                onChange={this.onChange}
                value={this.state.password}
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
        )
    }
}

export default EmployerLogin;