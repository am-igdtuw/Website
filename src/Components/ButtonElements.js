import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 60px;
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
    }
`
