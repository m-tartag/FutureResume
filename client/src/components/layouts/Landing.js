import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Landing extends Component {
    render() {
        return (
            <div style={{ height: "100vh" }} className="container valign-wrapper">
            <div className="row ">
            <div className="col s12 center align">
            <div>
                <h1 className="col s7center align" >Future Resume</h1>
            </div>
            <Link to ='/resumeform'
            class="waves-effect waves-light btn-large" style={{margin: "5px"}}>Register</Link>
            <a class="waves-effect waves-light btn-large blue" style={{margin: "5px"}}>Login</a>
            </div>
            </div>
            </div>
        )
    }
}

export default Landing