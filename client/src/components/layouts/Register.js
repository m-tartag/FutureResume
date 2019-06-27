import React, { Fragment, useState } from "react";

const Register = () => {
  const[formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match!');
      alert('Passwords do not match!');
    }
  }

  return (
      <Fragment>
      <div className="row ">
        <h4 className="align center">Register</h4>
        <form onSubmit={e => onSubmit(e)} className="col s4 offset-m4">
          <div className="row">
            <div className="input-field">
              <input
                name='name'
                placeholder="Name"
                value={name}
                onChange={e => onChange(e)}
                id="name"
                type="text"
                className="validate"
              />
              {/* <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              /> */}
              <input
                name='email'
                value={email}
                onChange={e => onChange(e)}
                placeholder="Email"
                id="email"
                type="email"
                className="validate"
              />
              {/* <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              /> */}
              <input
                name='password'
                value={password}
                onChange={e => onChange(e)}
                placeholder="Password"
                id="password"
                type="password"
                className="validate"
              />
              {/* <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              /> */}
              <input
                name='password2'
                value={password2}
                onChange={e => onChange(e)}
                placeholder="Password"
                id="password"
                type="password"
                className="validate"
              />
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
          </div>
        </form>
      </div>
      </Fragment>
    );
  }


export default Register;
