import { renderIntervals } from '../renderIntervals';

test('should return styling for intervals', () => {
  const data = {
    input: [[0, 10], [15, 20], [25, 30]],
    expectedOutput: [
      { left: '0%', width: '10%' },
      { left: '15%', width: '5%' },
      { left: '25%', width: '5%' },
    ],
  };

  const intervals = renderIntervals(data.input);
  expect(intervals).toEqual(data.expectedOutput);
});
