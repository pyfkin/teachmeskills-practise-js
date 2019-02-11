import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './../styles/LabyrinthDefinition.css';

class LabyrinthDefinition extends PureComponent {
  render() {
    return (
      <div className="labyrinth-definition">
        <h3>
          3. Copy labyrinth config from here:
        </h3>
        <textarea value={JSON.stringify(this.props.definition)} readOnly>
        </textarea>
      </div>
    );
  }
}

LabyrinthDefinition.propTypes = {
  definition: PropTypes.array,
};

export default LabyrinthDefinition;