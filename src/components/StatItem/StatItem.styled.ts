import styled from 'styled-components';

interface TypeProps {
  type: string;
}

export const UserData = styled.span<TypeProps>`
  display: flex;
  ${props => {
    if (props.type === 'percentage') {
      return 'font-size:30px';
    }
  }};
`;
