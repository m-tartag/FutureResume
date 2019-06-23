import React, { Component } from "react";
import axios from "axios";

class ResumeForm extends Component {
<<<<<<< HEAD
  constructor() {
    super();
    this.state = {
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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  postResume = () => {
    // Data Payload
    const data = {
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

    axios.post("/api/resume", data);
  };
  render() {
    return (
      
      <div class="row">
      <h3 class="align center">Insert Resume Details</h3>
      <form class="col s6 offset-m3" >
          <div class="row">
            <div class="input-field col s4">
              <input
                placeholder="First Name"
                id="first_name"
                type="text"
                class="validate"
              />

              <input
                placeholder="Last Name"
                id="first_name"
                type="text"
                class="validate"
              />

              <input
                placeholder="Address Name"
                id="first_name"
                type="text"
                class="validate"
              />

              <input
                placeholder="City"
                id="first_name"
                type="text"
                class="validate"
              />

              <input
                placeholder="State"
                id="first_name"
                type="text"
                class="validate"
              />

              <input
                placeholder="Zipcode"
                id="first_name"
                type="text"
                class="validate"
              />
              <input
                placeholder="CellPhone"
                id="first_name"
                type="text"
                class="validate"
              />

              <input
                placeholder="Email"
                id="first_name"
                type="text"
                class="validate"
              />

              <input
                placeholder="Github"
                id="first_name"
                type="text"
                class="validate"
              />

              <input
                placeholder="Twitter"
                id="first_name"
                type="text"
                class="validate"
              />

              <textarea
                id="textarea1"
                class="materialize-textarea"
                placeholder="About Me"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ResumeForm;
