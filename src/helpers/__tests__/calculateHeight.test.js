import { calculateHeight } from '../calculateHeight';

test('should calculate total height from given children (lines)', () => {
  const data = {
    input: [
      { props: { height: 10 } },
      { props: { height: 10 } },
      { props: { height: 10 } },
    ],
    expectedOutput: 30,
  };

  const totalHeight = calculateHeight(data.input);

  expect(totalHeight).toEqual(data.expectedOutput);
});
