import styled from 'styled-components';

export const Data = styled.span`
  display: flex;
  ${props => {
    if (props.type === 'percentage') {
      return 'font-size:30px';
    }
  }};
`;
