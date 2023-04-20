import styled from 'styled-components';

export const Table = styled.table`
  width: 60%;
  margin: 0 auto;
`;

export const TableHead = styled.th`
  padding: 10px;
  background-color: #76b1ff;
`;

export const TableRow = styled.tr`
  text-align: center;
  border: 1px solid #000;
  :nth-child(odd) {
    ${props => `background-color: ${props.theme.colors.gray}`}
  }

  :nth-child(even) {
    ${props => `background-color: ${props.theme.colors.darkGrey}`}
  }
`;
