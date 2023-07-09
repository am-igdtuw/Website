import styled from 'styled-components';
//import {Link} from 'react-router-dom';

export const FollowContainer = styled.div`
  background: black;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 30px 30px;
  }
`;

export const FollowContent = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const FollowP = styled.p`
  width: 100%;
  max-width: 720px;
  margin-bottom: 24px;
  padding: 8px 16px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 198, 64, 0.6) 0%, rgba(242, 175, 19, 0.6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 100%;

  
  @media screen and (max-width: 768px) {
    margin-top: 24px;
    
  }
`;

export const SocialIconsLink = styled.a`
  color: #fff;
  font-size: 30px;
  margin: 0 10px;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
    color: #C0C0C0;
    color: hsl(0, 0%, 90%);
    filter: brightness(150%);
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
