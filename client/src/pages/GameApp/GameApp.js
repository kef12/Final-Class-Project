import React, { Component } from 'react';
import Grid from './Grid/Grid';
import ColorPickers from './ColorPickers/ColorPickers';
import { Graph } from './Graph';

import './GameApp';

const SIZE = 12;
const COLORS = ['blue','red','green','yellow','orange'];

class BoardGame extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.sliderInput = this.sliderInput.bind(this);
    this.restart = this.restart.bind(this);
    this.colorFill = this.colorFill.bind(this);
    this.state = {
      size: SIZE,
      graph: new Graph(SIZE),
      colors: COLORS,
      count: 0,
    }
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  restart() {
    this.setState({
      graph: new Graph(this.state.size),
      count: 0
    });
  }

  sliderInput(value) {
    this.setState({
      size: value,
      graph: this.newGrid(value, this.state.colors),
      count: 0
    });
  }

  colorFill(color) {
    this.state.graph.colorFill(color);
  }

  render() {
    return (
      <div className="content">

        <div className="header" class="row">
        <div class="col-md-4"></div>
          <h1 id="colorTitle">Color Flood</h1>
          </div>

          <div class="row" id="newchanges">
          <div class="col-md-5"></div>
          <div className="newgame" onClick={(e) => this.restart()}>New Game</div>
          <div className="count">Changes <span>{this.state.count}</span></div>
        </div>

          <div><ColorPickers colors={this.state.colors} clickHandler={this.colorFill} incrementCount={this.incrementCount}/></div>

          <div className="instructions">
          <h3>Starting in the top left corner click on the circles to fill the grid! Try to get as few changes as possible!</h3>
          </div>

          <div id="grid">
  <Grid grid={this.state.graph} colors={this.state.colors} size={this.state.size}/> 
  </div>

      </div> 

    );
  }
}

export default BoardGame;
