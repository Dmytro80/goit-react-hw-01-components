import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 16px;
  width: calc(100% / 3);
  background-color: rgb(247, 245, 245);
  border-top: 2px solid rgb(126, 126, 126);
  :not(:last-child) {
    border-right: 2px solid rgb(126, 126, 126);
  }
`;

export const StatsTitle = styled.span`
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 500;
  color: rgb(179, 179, 179);
  margin-bottom: 4px;
`;
export const StatsValue = styled.span`
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  color: black;
`;
