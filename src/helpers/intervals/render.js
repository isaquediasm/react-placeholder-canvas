function renderIntervals(intervals) {
  return intervals.map(([beginning, end]) => {
    return {
      left: `${beginning}%`,
      width: `${end - beginning}%`,
    };
  });
}

export { renderIntervals };
