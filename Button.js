import React, { Component } from "react";
import "./Button.scss";

export default class Button extends Component {
  render() {
    return (
      <div onClick={this.props.handleLogin} className="Button">
        {this.props.value}
      </div>
    );
  }
}
