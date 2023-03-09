import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    // background: ${({primary})=> (primary ? '#01BF71' : '#010606')};
    background: radial-gradient(50% 50% at 50% 50%, #FFC640 47.4%, #F2AF13 100%);
    white-space: nowrap;
    color: ${({dark})=> (dark ? '#010606' : '#fff')};
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    curson: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#fff' : '#01BF71')};
    }
`
