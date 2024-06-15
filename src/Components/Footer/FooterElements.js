import styled from "styled-components";
import { Link } from "react-router-dom";
// import logo from 'src/logo.svg'

export const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.15);
  z-index: 2;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  z-index: 12;

  @media screen and (max-width: 768px) {
    ${"" /* height: auto; */}
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 2;

  gap: 20px;
  //   @media screen and(max-width: 768px) {
  //    flex-wrap: wrap;
  //   }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: centre;
  margin: 45px;
  margin-left: 20px;
  text-align: centre;
  width: 160px;
  box-sizing: border-box;
  color: #ffffff;
  z-index: 2;

  @media screen and (max-width: 420px) {
    margin: 5px;
    padding: 5px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
  margin-right: 12px;
  z-index: 2;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin-right: 16px;
  }
`;
export const FooterLink = styled(Link)`
  color: #ffc640;
  text-decoration: none;
  margin-bottom: 0.5rem;
  margin-left: 24px;
  font-size: 14px;
  z-index: 2;
  font-size: 16px;

  &:hover {
    color: #ffc640;
    transition: 0.3s ease-out;
    text-decoration: none;
  }
  
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  z-index: 2;
  text-decoration: none;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 45px 40px 0 auto;
  text-decoration: none;
  z-index: 2;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialLogo = styled.a`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoraton: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  z-index: 2;
`;
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  z-index: 2;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  z-index: 2;
`;

export const SocialIconsLink = styled.a`
  color: #fff;
  z-index: 2;
  font-size: 24px;
  &:hover {
    color: #ffc640;
    transition: 0.3s ease-out;
  }
`;

export const Gap = styled.div`
  margin: 14px 0;
  height: 4px;
  z-index: 1;

  @media screen and (max-width: 420px) {
    margin: 5px;
  }
`;

export const FooterLogo = styled.div`
  height: auto;
  width: 150px;
  color: #fff;
  justify-self: flex-start;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  margin-left: 6px;
  margin-top: 5px;
  font-weight: bold;
  text-decoration: none !important;
`;

export const InputBox1 = styled.input`
  padding: 17px;
  margin: 0px 0px;
  margin-bottom: 5px;
  margin-left: -25px;
  width: 175px;
  height: 40px;
  border: 3px solid #f2af13;
  border-radius: 12px;
  font-size: 16px;
  background-color: #ffffff;
  ::placeholder {
    color: #000000;
  }
  @media screen and (max-width: 480px) {
    width: 65%;
    margin-left: -25px;
  }
`;
export const FaqInsidBox = styled.div`
  display: flex;
  items-align: center;
  @media screen and (max-width: 480px) {
    width: 100% !important;
  }
`;

export const SubmitButton = styled.button`
  padding: 6px;
  margin: 0;
  background-color: #f2af13;
  color: white;
  border: 2px solid #f2af13;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 0px;
  margin-bottom: 5px;
  margin-left: 4px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 4px;
  }
`;