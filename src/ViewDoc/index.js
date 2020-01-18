import React, { Component } from "react";

export default class ViewDoc extends Component {
  render() {
    const keysArr = Object.keys(this.props.data[0]);
    return (
      <div>
        {this.props.data.length > 0 ? (
          <table id={this.props.elementId}>
            <tbody>
              <tr>
                <th>{keysArr[0]}</th>
                <th>{keysArr[1]}</th>
                <th>{keysArr[2]}</th>
              </tr>
              {this.props.data.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row[keysArr[0]]}</td>
                    <td>{row[keysArr[1]]}</td>
                    <td>{row[keysArr[2]]}</td>
                    <td>{row[keysArr[3]]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }
}
