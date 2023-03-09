import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 60px;
    background: ${({primary})=> (primary ? '#F2AF13' : '#F2AF13')};
    white-space: nowrap;
    color: ${({dark})=> (dark ? '#010606' : '#FFC640')};
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig})=> (fontBig ? '30px' : '30px')};
    outline: none;
    border: none;
    curson: pointer;
    width: 391px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#fff' : '#01BF71')};
    }
`
