import React, { Component } from "react";
import ViewDoc from "../ViewDoc";
import printJS from "print-js";

export default class DownloadDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      showData: false
    };
  }
  render() {
    const { showData } = this.state;
    const data = window.localStorage.getItem("docData");
    return (
      <div>
        <input
          type="string"
          value={this.state.value}
          name="Enter ack no"
          onChange={event => {
            event.preventDefault();
            this.setState({ value: event.target.value });
          }}
        />
        <input
          type="button"
          value={"submit"}
          onClick={event => {
            event.preventDefault();
            if (this.state.value === "123456") {
              this.setState({ showData: true });
            }
          }}
        />
        {showData ? (
          <div>
            <ViewDoc data={JSON.parse(data)} elementId="test" />
            <input
              type="button"
              value={"approve"}
              onClick={event => {
                event.preventDefault();
                this.setState({ showData: false, value: "" });
                printJS("test", "html");
              }}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
