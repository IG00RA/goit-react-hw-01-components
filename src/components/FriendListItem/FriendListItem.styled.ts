import styled from 'styled-components';
interface OnlineCheckProps {
  isonline: string;
}

export const OnlineCheck = styled.span<OnlineCheckProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${props => {
    if (JSON.parse(props.isonline)) {
      return `background-color: ${props.theme.colors.green}`;
    }
    return `background-color: ${props.theme.colors.red}`;
  }};
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
