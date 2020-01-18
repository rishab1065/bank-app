import React, { Component } from "react";

export default class ViewDoc extends Component {
  render() {
    return (
      <div>
        {this.props.data.length > 0 ? (
          <table id={this.props.elementId}>
            <tbody>
              {this.props.data.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
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
