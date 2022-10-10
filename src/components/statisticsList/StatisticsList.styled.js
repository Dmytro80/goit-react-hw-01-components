import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  width: calc(100% / 5);
  
 
  }
`;
export const StatsTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 500;
  color: rgb(179, 179, 179);
  margin-bottom: 4px;
`;

export const StatsValue = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  color: black;
`;
