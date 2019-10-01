import React, { Fragment, Component, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import Placeholder from './index';

const App = ({ className }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(current => current + 1);

  return (
    <Placeholder.Wrapper>
      <Placeholder.Line height={10} intervals={[[0, 10], [20, 30]]} />
      <Placeholder.Line height={10} />
      <Placeholder.Line height={10} intervals={[[0, 10], [20, 30]]} />
    </Placeholder.Wrapper>
  );
};

const StyledApp = styled(App)`
  background: yellow;
`;

export default hot(() => (
  <Fragment>
    <StyledApp />
  </Fragment>
));
