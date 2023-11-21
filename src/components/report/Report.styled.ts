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

export const ReportTableWrapper = styled.div`
  margin-bottom: 30px;

  .ant-table-thead .ant-table-cell {
    background-color: lightblue
  }
`