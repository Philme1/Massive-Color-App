import React, { Component } from 'react';
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    return (
      <div style={{background: this.props.background}} className="colorBox">
        <span>{this.props.name}</span>
        <span>Here</span>
      </div>
    )
  }
}

export default ColorBox;
