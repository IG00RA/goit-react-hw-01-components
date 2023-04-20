import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const Section = styled.section`
  text-align: center;
  width: 400px;
  background-color: ${props => props.theme.colors.white};
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Tittle = styled.h2`
  padding: 35px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
`;

export const Item = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  color: ${props => props.theme.colors.white};
  align-items: center;
`;
