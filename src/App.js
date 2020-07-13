import React from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from "./seedColors";
import { Component } from 'react';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
  return (
    <div>
     <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
  }
}

export default App;
