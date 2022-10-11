import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8px;
  padding-top: 16px;
  background-color: white;
  width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const InfoBlock = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const UserAvatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 32px;
`;

export const UserName = styled.p`
  margin-bottom: 16px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: black;
`;

export const UserTag = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
  color: rgb(179, 179, 179);
  margin-bottom: 16px;
`;

export const UserLocation = styled.p`
  font-size: 32px;
  font-weight: 500;
  color: rgb(175, 170, 170);
  text-align: center;
`;

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
