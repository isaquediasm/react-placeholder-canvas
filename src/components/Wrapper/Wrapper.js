import React from 'react';
import PropTypes from 'prop-types';
import { calculateHeight } from '../../helpers';
import { StyledWrapper } from './Wrapper.styled';

const Component = ({
  style = {},
  children,
  height = calculateHeight(children),
}) => <StyledWrapper style={{ height, ...style }}>{children}</StyledWrapper>;

const Wrapper = React.memo(Component);

Wrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Wrapper;
