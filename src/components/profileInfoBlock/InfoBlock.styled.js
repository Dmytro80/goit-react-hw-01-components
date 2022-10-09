import styled from 'styled-components';

export const Wrapper = styled.div`
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
