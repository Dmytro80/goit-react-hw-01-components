import styled from 'styled-components';

export const FriendItem = styled.li`
  padding-top: 24px;
  padding-bottom: 24px;

  display: flex;
  justify-content: start;
  align-items: center;
  background-color: white;
  width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const FriendName = styled.p`
  font-size: 40px;
  font-weight: 500;
  margin-left: 16px;
`;

export const FriendAvatar = styled.img`
  display: block;
  margin-left: 16px;
  max-width: 100%;
  height: auto;
`;

export const FriendActive = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: green;
  margin-left: 16px;
`;

export const FriendNotActive = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: red;
  margin-left: 16px;
`;
