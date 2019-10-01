import React from 'react';
import PropTypes from 'prop-types';
import { invertIntervals, renderIntervals } from '../../helpers';

function Component({ style = {}, height, intervals }) {
  return (
    <div className='placeholder-line' style={{ height, ...style }}>
      {renderIntervals(invertIntervals(intervals)).map((styling, idx) => (
        <div key={idx} className='placeholder-offset' style={styling} />
      ))}
    </div>
  );
}

const Line = React.memo(Component);

Line.propTypes = {
  height: PropTypes.number.isRequired,
  intervals: PropTypes.array,
};

export default Line;
