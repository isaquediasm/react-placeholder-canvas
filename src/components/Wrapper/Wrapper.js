import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.css';

/**
 * Calculate the height of the wrapper based on the lines
 * @param {Array} lines
 */
function calculateHeight(children) {
  return children
    .map(child => child.props)
    .reduce((prev, curr) => {
      return prev + curr.height;
    }, 0);
}

function Component({
  style = {},
  children,
  height = calculateHeight(children),
}) {
  return (
    <div className='placeholder-wrapper' style={{ height, ...style }}>
      {children}
    </div>
  );
}

const Wrapper = React.memo(Component);

Wrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Wrapper;
