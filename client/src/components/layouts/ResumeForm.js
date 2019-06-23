import React, { Component } from 'react';


class ResumeForm extends Component {
    render() {
        return (
            <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input placeholder="First Name" id="first_name" type="text" class="validate" />
        
          <input placeholder="Last Name" id="first_name" type="text" class="validate" />
     
          <input placeholder="Address Name" id="first_name" type="text" class="validate" />
         
          <input placeholder="City" id="first_name" type="text" class="validate" />
     
          <input placeholder="State" id="first_name" type="text" class="validate" />
          
          <input placeholder="Zipcode" id="first_name" type="text" class="validate" />
  
          <input placeholder="Email" id="first_name" type="text" class="validate" />
   
          <input placeholder="Github" id="first_name" type="text" class="validate" />
     
          <input placeholder="Twitter" id="first_name" type="text" class="validate" />
  
          <textarea id="textarea1" class="materialize-textarea" placeholder="About Me"></textarea>
       
        </div>
       
        
      </div>
      </form>
        </div>
        )
    }
}

export default ResumeForm