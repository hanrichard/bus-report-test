import styled from 'styled-components';

export const ReportStatusWrapper = styled.span`
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
