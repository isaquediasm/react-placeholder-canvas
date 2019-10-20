import React from 'react';
import PropTypes from 'prop-types';
import { calculateHeight } from '../../helpers';
import { StyledWrapper } from './Wrapper.styled';

function Component({
  style = {},
  children,
  height = calculateHeight(children),
}) {
  return <StyledWrapper style={{ height, ...style }}>{children}</StyledWrapper>;
}

const Wrapper = React.memo(Component);

Wrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Wrapper;
