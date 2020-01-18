import React, { Component } from "react";
import readXlsxFile from "read-excel-file";
import ViewDoc from "../ViewDoc";

export default class UploadDoc extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      data: [],
      isSubmitted: false
    };
  }
  render() {
    const { data, isSubmitted } = this.state;
    return (
      <div>
        <input
          ref={this.fileInput}
          type="file"
          name="Browse"
          onChange={event => {
            event.preventDefault();
            readXlsxFile(event.target.files[0]).then(rows => {
              this.setState({ data: rows, isSubmitted: false });
            });
          }}
        />
        {data.length > 0 && (
          <div>
            <ViewDoc data={data} />
            {isSubmitted ? (
              <div>{"ACK no: 123456"}</div>
            ) : (
              <input
                type="button"
                value="Upload Doc"
                onClick={event => {
                  event.preventDefault();
                  this.setState({ isSubmitted: true });
                  window.localStorage.setItem("docData", JSON.stringify(data));
                }}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
