import { invertIntervals } from '../invertIntervals';

test('should invert a given interval', () => {
  const data = {
    input: [[0, 10], [15, 20], [25, 30]],
    expectedOutput: [[10, 15], [20, 25], [30, 100]],
  };

  const intervals = invertIntervals(data.input);
  expect(intervals).toEqual(data.expectedOutput);
});
