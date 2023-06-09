import styled from 'styled-components';

export const OnlieCheck = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${props => {
    if (props.isOnline) {
      return `background-color: ${props.theme.colors.green}`;
    }
    return `background-color: ${props.theme.colors.red}`;
  }};
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
