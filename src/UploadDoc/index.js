import React, { Component } from "react";
import XLSX from "xlsx";
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

  handleFile(file) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = reader.readAsBinaryString;

    reader.onload = e => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      this.setState({ data });
    };

    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
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
            this.handleFile(event.target.files[0]);
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
