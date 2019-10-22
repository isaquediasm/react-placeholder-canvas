import React from 'react';
import PropTypes from 'prop-types';
import { invertIntervals, renderIntervals } from '../../helpers';
import { StyledOffset, StyledLine } from './Line.styled';

const Component = ({ height, intervals }) => (
  <StyledLine height={height}>
    {renderIntervals(invertIntervals(intervals)).map((styling, idx) => (
      <StyledOffset key={idx} style={styling} />
    ))}
  </StyledLine>
);

const Line = React.memo(Component);

Line.propTypes = {
  height: PropTypes.number.isRequired,
  intervals: PropTypes.array,
};

export default Line;
