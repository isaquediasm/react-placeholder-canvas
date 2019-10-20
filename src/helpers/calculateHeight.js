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

export { calculateHeight };
