import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import classnames from "classnames";


class ResumeForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    cellPhone: "",
    personalEmail: "",
    githubURL: "",
    twitterURL: "",
    personalWebsiteURL: "",
    aboutMeStatement: "",
    errors: {}
  };

  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  newResume = (e) => {
    e.preventDefault();
    // Data Payload
    const newResume = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      cellPhone: this.state.cellPhone,
      personalEmail: this.state.personalEmail,
      githubURL: this.state.githubURL,
      twitterURL: this.state.twitterURL,
      personalWebsiteURL: this.state.personalWebsiteURL,
      aboutMeStatement: this.state.aboutMeStatement
    };

    axios.post('/api/resume/resumeForm', newResume)
    .then(res => {
      if (res.status !==200){
        res.json()
        .then(res => console.log(res))
      } else {
        console.log(res.data)
      }
    })
      
  
  };


  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <h3 className="align center">Insert Resume Details</h3>
        <div className="row">
          <form
            noValidate
            onSubmit={this.newResume}
            className="col s8 offset-s2"
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.firstName}
                  error={errors.firstName}
                  placeholder="First Name"
                  id="firstName"
                  type="text"
                  className={classnames("", {
                    isvalid: errors.firstName
                  })}
                />
               
                <span className="red-text">{errors.firstName}</span>

                <input
                  onChange={this.onChange}
                  value={this.state.lastName}
                  error={errors.lastName}
                  placeholder="Last Name"
                  id="lastName"
                  type="text"
                  
                />

                <input
                  onChange={this.onChange}
                  value={this.state.address}
                  error={errors.address}
                  placeholder="Address Name"
                  id="address"
                  type="text"
                  
                />

                <input
                  onChange={this.onChange}
                  value={this.state.city}
                  error={errors.city}
                  placeholder="City"
                  id="city"
                  type="text"
                  
                />

                <input
                  onChange={this.onChange}
                  value={this.state.state}
                  error={errors.state}
                  placeholder="State"
                  id="state"
                  type="text"
                  
                />

                <input
                  onChange={this.onChange}
                  value={this.state.zipcode}
                  error={errors.zipcode}
                  placeholder="Zipcode"
                  id="zipcode"
                  type="text"
                 
                />
                <input
                  onChange={this.onChange}
                  value={this.state.cellPhone}
                  error={errors.cellPhone}
                  placeholder="CellPhone"
                  id="cellPhone"
                  type="text"
                  
                />

                <input
                  onChange={this.onChange}
                  value={this.state.personalEmail}
                  error={errors.personalEmail}
                  placeholder="Email"
                  id="personalEmail"
                  type="text"
                 
                />

                <input
                  onChange={this.onChange}
                  value={this.state.githubURL}
                  error={errors.githubURL}
                  placeholder="Github"
                  id="githubURL"
                  type="text"
                  
                />

                <input
                  onChange={this.onChange}
                  value={this.state.twitterURL}
                  error={errors.twitterURL}
                  placeholder="Twitter"
                  id="twitterURL"
                  type="text"
                  
                />
                <input
                  onChange={this.onChange}
                  value={this.state.personalWebsiteURL}
                  error={errors.personalWebsiteURL}
                  placeholder="Personal Website"
                  id="personalWebsiteURL"
                  type="text"
                  
                />

                <textarea
                  onChange={this.onChange}
                  value={this.state.aboutMeStatement}
                  error={errors.aboutMeStatement}
                  id="aboutMeStatement"
                  class="materialize-textarea"
                  placeholder="About Me"
                />
              </div>
              <div className="col s12">
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
      </div>
    );
  }
}
ResumeForm.propTypes = {
  errors: PropTypes.object.isRequired
}


export default ResumeForm;
