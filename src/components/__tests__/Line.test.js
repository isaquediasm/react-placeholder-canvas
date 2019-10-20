import React from 'react';
import renderer from 'react-test-renderer';
import Line from '../Line/Line';

it('should render lines correctly', () => {
  const tree = renderer
    .create(<Line height={10} intervals={[[0, 10], [20, 30]]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
