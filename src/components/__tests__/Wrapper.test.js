import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../Wrapper/Wrapper';
import Line from '../Line/Line';

it('should render lines correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <Line height={10} intervals={[[0, 10], [20, 30]]} />
        <Line height={10} />
        <Line height={10} intervals={[[0, 10], [20, 30]]} />
      </Wrapper>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
