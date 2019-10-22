import styled from 'styled-components';

const StyledOffset = styled.div`
  position: absolute;
  display: inline-block;
  background-color: #fff;
  height: inherit;
`;

const StyledLine = styled.div`
  height: ${props => props.height}px;
`;

export { StyledOffset, StyledLine };
