import styled from 'styled-components';

export const StatsSection = styled.section`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8px;

  background-color: white;
  width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
export const Title = styled.h2`
  padding-top: 16px;
  padding-bottom: 16px;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
`;
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
