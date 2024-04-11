import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    ${'' /* border-radius: 60px;
    background: ${({primary})=> (primary ? '#F2AF13' : '#F2AF13')};
    white-space: nowrap;
    color: ${({dark})=> (dark ? '#010606' : '#010606')};
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig})=> (fontBig ? '28px' : '28px')};
    outline: none;
    border: none;
    cursor: pointer;
    width: 391px;
    height: 64px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#F2AF13' : '#010606')};
    } */}

    border-radius: 60px;
    background: ${({ primary }) => (primary ? '#F2AF13' : '#F2AF13')};
    white-space: nowrap;
    color: ${({ dark }) => (dark ? '#010606' : '#010606')};
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({ fontBig }) => (fontBig ? '28px' : '28px')};
    outline: none;
    border: 2px solid #403e08;
    box-shadow: 0 3px 0 black, 0px 3px 6px #fff;
    text-decoration: none;
    cursor: pointer;
    width: 391px;
    height: 64px;
    display: flex;
    justify-content: left;
    align-items: left;
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);transition: 0.7s;

    &:hover {
        color: #fff;
        background: #827e76;
        border: 2px solid #403e08, 0px 4px 6px #fff; 
        background: ${({ primary }) => (primary ? '#948356' : '#e3bc54')};
        box-shadow: 0 0 #e3bc54;
    }

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
        width: 20rem;
        height: 3.5rem;
    }

    @media screen and (max-width: 769px){
       justify-content: left;
    }

    @media screen and (max-width: 480px){
        font-size: 1.3rem;
        max-width: 100%;
        margin:0;
        height: 3.2rem;
        display: flex;
        align-items : center;
        justify-content: center;

    }
`
