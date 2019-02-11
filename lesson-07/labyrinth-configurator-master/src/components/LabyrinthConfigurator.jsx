import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './../styles/LabyrinthConfigurator.css';
import defaults from './../defaults';
import {firstCapital} from "../utils/utils";

class LabyrinthConfigurator extends PureComponent {
  _renderRow = (rowIndex) => {
    let cells = [];

    for (let i = 0; i < this.props.width; i++) {
      cells.push(
        <div className="cell" key={i} style={this._calculateBorder(i, rowIndex)}>
          <button
            className="button left-button"
            onClick={this.props.onSideButtonClickHandler.bind(null, i, rowIndex, defaults.DIRECTION_LEFT)}
          >&#8592;</button>
          <button
            className="button top-button"
            onClick={this.props.onSideButtonClickHandler.bind(null, i, rowIndex, defaults.DIRECTION_TOP)}
          >&#8593;</button>
          <button
            className="button right-button"
            onClick={this.props.onSideButtonClickHandler.bind(null, i, rowIndex, defaults.DIRECTION_RIGHT)}
          >&#8594;</button>
          <button
            className="button bottom-button"
            onClick={this.props.onSideButtonClickHandler.bind(null, i, rowIndex, defaults.DIRECTION_BOTTOM)}
          >&#8595;</button>
        </div>
      );
    }

    return cells;
  };

  _calculateBorder = (x, y) => {
    console.log(x, y);

    let style = {};
    let directions = [
      defaults.DIRECTION_LEFT,
      defaults.DIRECTION_RIGHT,
      defaults.DIRECTION_TOP,
      defaults.DIRECTION_BOTTOM,
    ];

    directions.forEach((direction) => {
      style[`border${firstCapital(direction)}`] = this.props.labyrinthConfig[x][y][direction] === true ? '3px solid black' : '3px solid white';
    });

    return style;
  };

  _renderGrid = () => {
    let rows = [];

    for (let i = 0; i < this.props.height; i++) {
      rows.push(
        <div className="row" key={i}>
          {this._renderRow(i)}
        </div>
      );
    }

    return rows;
  };

  render() {
    return (
      <div className="labyrinth-configurator">
        <h3>
          2. Click on arrows in order to build labyrinth:
        </h3>
        <div className="grid">
          <span className="top-left coordinate-block">0;0</span>
          {
            this._renderGrid()
          }
          <span className="bottom-right coordinate-block">{`${this.props.width}:${this.props.height}`}</span>
        </div>
      </div>
    );
  }
}

LabyrinthConfigurator.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onSideButtonClickHandler: PropTypes.func,
  labyrinthConfig: PropTypes.array,
};

export default LabyrinthConfigurator;