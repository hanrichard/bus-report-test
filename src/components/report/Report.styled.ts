import styled from 'styled-components';

export const TextWrapper = styled.span`
  &.isEarly {
    color: red
  }

  &.isLate {
    color: blue
  }

  &.isOnTime {
    color: green
  }

  &.isNull {
    color: yellow
  }
`;