import React, { Component } from "react";
import "./App.css";
import AppRouter from "./AppRouter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}
