import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import defaults from './../defaults';
import './../styles/ParamsBlock.css';

class ParamsBlock extends PureComponent {
  render() {
    return (
      <div className="params-block">
        <h3>
          1. Enter labyrinth's params here:
        </h3>
        <div className='input-row'>
          <label>width (min: {defaults.MIN_LABYRINTH_SIZE}, max: {defaults.MAX_LABYRINTH_SIZE}): </label> <input value={this.props.width} onChange={this.props.onWidthChange} type="number"/>
        </div>
        <div className='input-row'>
          <label>height (min: {defaults.MIN_LABYRINTH_SIZE}, max: {defaults.MAX_LABYRINTH_SIZE}): </label> <input value={this.props.height} onChange={this.props.onHeightChange} type="number"/>
        </div>
      </div>
    );
  }
}

ParamsBlock.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onWidthChange: PropTypes.func.isRequired,
  onHeightChange: PropTypes.func.isRequired,
};

export default ParamsBlock;