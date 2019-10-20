function invertIntervals(intervalsGroup = []) {
  const transformer = intervalsGroup.reduce(
    ({ intervals, currentOffset }, [beginning, end]) => ({
      intervals:
        currentOffset !== beginning
          ? [...intervals, [currentOffset, beginning]]
          : intervals,
      currentOffset: end,
    }),
    { intervals: [], currentOffset: 0 }
  );

  return transformer.currentOffset !== 100
    ? [...transformer.intervals, [transformer.currentOffset, 100]]
    : transformer.intervals;
}

export { invertIntervals };
