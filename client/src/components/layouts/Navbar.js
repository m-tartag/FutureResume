import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ResumeForm from './ResumeForm'


class NavBar extends Component {
    render() {
      return (
        <div className="App">
          <nav>
    <div class="nav-wrapper blue">
      <a href="#!" class="brand-logo center white-text">Future Resume</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Create Resume</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="#">Create Resume</a></li>
    <li><a href="#">About</a></li>
  </ul>
          
        </div>
       
      )
    }
  }
  
  
  export default NavBar;