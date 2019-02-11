import React, {Component} from 'react';

import './styles/App.css';
import ParamsBlock from './components/ParamsBlock';
import LabyrinthConfigurator from './components/LabyrinthConfigurator';
import LabyrinthDefinition from './components/LabyrinthDefinition';
import defaults from './defaults';

class App extends Component {
  constructor() {
    super();

    this.state = {
      labyrinthWidth: defaults.DEFAULT_LABYRINTH_WIDTH,
      labyrinthHeight: defaults.DEFAULT_LABYRINTH_HEIGHT,
      labyrinthConfig: this._calculateLabyrinthConfig(defaults.DEFAULT_LABYRINTH_WIDTH, defaults.DEFAULT_LABYRINTH_HEIGHT)
    };
  }

  _calculateLabyrinthConfig = (width, height) => {
    let rows = [];

    for (let i = 0; i < width; i++) {
      let cells = [];
      for (let j = 0; j < height; j++) {
        cells.push({
          [defaults.DIRECTION_TOP]: false,
          [defaults.DIRECTION_LEFT]: false,
          [defaults.DIRECTION_BOTTOM]: false,
          [defaults.DIRECTION_RIGHT]: false,
        });
      }

      rows.push(cells)
    }

    return rows;
  };

  _fixNumberValue = (value) => {
    let _value = parseInt(value);

    if (_value < defaults.MIN_LABYRINTH_SIZE) {
      _value = defaults.MIN_LABYRINTH_SIZE;
    }

    if (_value > defaults.MAX_LABYRINTH_SIZE) {
      _value = defaults.MAX_LABYRINTH_SIZE;
    }

    return _value;
  };

  _onWidthChangeHandler = (e) => {
    let value = this._fixNumberValue(e.target.value);

    this.setState({
      labyrinthWidth: value,
      labyrinthConfig: this._calculateLabyrinthConfig(value, this.state.labyrinthHeight),
    });
  };

  _onHeightChangeHandler = (e) => {
    let value = this._fixNumberValue(e.target.value);

    this.setState({
      labyrinthHeight: value,
      labyrinthConfig: this._calculateLabyrinthConfig(this.state.labyrinthWidth, value),
    });
  };

  _onLabyrinthSideButtonClickHandler = (x, y, side) => {
    let config = this.state.labyrinthConfig.slice();
    let value = !config[x][y][side];
    config[x][y][side] = value;

    if (side === defaults.DIRECTION_LEFT && x > 0) {
      config[x - 1][y][defaults.DIRECTION_RIGHT] = value;
    }

    if (side === defaults.DIRECTION_RIGHT && x < this.state.labyrinthWidth - 1) {
      config[x + 1][y][defaults.DIRECTION_LEFT] = value;
    }

    if (side === defaults.DIRECTION_TOP && y > 0) {
      config[x][y - 1][defaults.DIRECTION_BOTTOM] = value;
    }

    if (side === defaults.DIRECTION_BOTTOM && y < this.state.labyrinthHeight - 1) {
      config[x][y + 1][defaults.DIRECTION_TOP] = value;
    }

    this.setState({
      labyrinthConfig: config,
    });
  };

  render() {
    return (
      <div>
        <h1 className="header">Labyrinth configurator</h1>
        <div className="app">
          <ParamsBlock
            width={this.state.labyrinthWidth}
            height={this.state.labyrinthHeight}
            onWidthChange={this._onWidthChangeHandler}
            onHeightChange={this._onHeightChangeHandler}
          />
          <LabyrinthConfigurator
            width={this.state.labyrinthWidth}
            height={this.state.labyrinthHeight}
            onSideButtonClickHandler={this._onLabyrinthSideButtonClickHandler}
            labyrinthConfig={this.state.labyrinthConfig}
          />
          <LabyrinthDefinition definition={this.state.labyrinthConfig}/>
        </div>
      </div>
    );
  }
}

export default App;
