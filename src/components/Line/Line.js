import React from 'react';
import PropTypes from 'prop-types';
import { invertIntervals, renderIntervals } from '../../helpers';
import { StyledOffset } from './Line.styled';

function Component({ style = {}, height, intervals }) {
  return (
    <div style={{ height, ...style }}>
      {renderIntervals(invertIntervals(intervals)).map((styling, idx) => (
        <StyledOffset
          key={idx}
          className='placeholder-offset'
          style={styling}
        />
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
