import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Friend = styled.li`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 7px 6px 17px -8px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`;
