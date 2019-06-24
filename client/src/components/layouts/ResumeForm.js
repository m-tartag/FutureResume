import React, { Component } from 'react';


class ResumeForm extends Component {
    render() {
        return (
            <div class="row " >
               <h3 class="align center">Insert Resume Details</h3>
    <form class="col s6 offset-m3" >
      <div class="row ">
        <div class="input-field ">
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

          <button class="btn waves-effect waves-light align right blue" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
       
        </div>
       
        
      </div>
      </form>
        </div>
        )
    }
}

export default ResumeForm