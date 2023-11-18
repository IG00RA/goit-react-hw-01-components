import styled from 'styled-components';

export const ProfCard = styled.div`
  text-align: center;
  width: 250px;
  background-color: ${props => props.theme.colors.white};
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 7px 6px 17px -8px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`;

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.gray};
`;

export const UserInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${props => props.theme.colors.darkGrey};
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

export const UserStat = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 15px;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  background-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.darkGrey};
`;

export const UserStats = styled.span`
  font-size: 17px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;
