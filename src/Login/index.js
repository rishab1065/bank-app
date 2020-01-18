import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <div>
          <Link to="/upload-doc">Upload docs</Link>
        </div>
        <div>
          <Link to="/download-doc">Download docs</Link>
        </div>
      </div>
    );
  }
}
