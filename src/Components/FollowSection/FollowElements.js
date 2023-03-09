import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FollowContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 150px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`
export const FollowContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FollowP = styled.p`
width: 720px;
height: 56px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 28px;
/* or 140% */

text-align: center;

background: linear-gradient(180deg, rgba(255, 198, 64, 0.6) 0%, rgba(242, 175, 19, 0.6) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const SocialLogo = styled(Link)`
 color: #fff;
 justify-self: start;
 cursor: pointer;
 text-decoraton: none;
 font-size: 1.5rem;
 display: flex;
 align-items: center;
 margin-bottom: 16px;
 font-weight: bold;
`

export const SocialIcons = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 font-size: 30px;
 width: 250px;
`

export const SocialIconsLink = styled.a`
 color: #fff;
 font-size; 15px;
`