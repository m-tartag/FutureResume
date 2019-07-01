import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper blue">
            <a href="/" className="brand-logo center white-text">
              Future Resume
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/resumeform">Create Resume</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="/resumeform">Create Resume</a></li>
    <li><a href="/about">About</a></li>
  </ul>
          
        </div>
       
      )
    }
  }


export default NavBar;
