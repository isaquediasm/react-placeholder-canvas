import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -600px 0;
  }

  100% {
    background-position: 600px 0;
  }
`;

const StyledWrapper = styled.div`
  height: 100%;
  position: relative;
  animation: ${shimmer} 1s linear infinite forwards;
  background: linear-gradient(to right, #d2d2d2 8%, #ababab 18%, #d2d2d2 33%);
  background-size: 1200px 104px;
`;

export { StyledWrapper };
