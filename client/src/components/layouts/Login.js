import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div class="row " >
               <h4 class="align center">Login</h4>
    <form class="col s4 offset-m4" >
      <div class="row ">
        <div class="input-field ">
          <input placeholder= 'Email' id="email" type="email" class="validate" />
          <span class="helper-text" data-error="wrong" data-success="right"></span>
          <input placeholder= 'Password'id="password" type="password" class="validate" />
          <span class="helper-text" data-error="wrong" data-success="right"></span>
        </div>
      </div>
    </form>
  </div> 
  )
  }
  }
        

export default Login