import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import UploadDoc from "./UploadDoc";
import DownloadDoc from "./DownloadDoc";
export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/upload-doc" component={UploadDoc} exact />
          <Route path="/download-doc" component={DownloadDoc} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
