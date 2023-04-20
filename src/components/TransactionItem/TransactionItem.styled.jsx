import styled from 'styled-components';

export const TableData = styled.td`
  padding: 10px;
  border: 0.5px solid ${props => `${props.theme.colors.darkGrey}`};
  color: ${props => `${props.theme.colors.black}`};
  ${props => {
    if (props.type) {
      return `text-transform: capitalize;`;
    }
  }};
`;
