import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
<<<<<<< HEAD
    border-radius: 60px;
    background: ${({primary})=> (primary ? '#FFC640' : '#010606')};
=======
    border-radius: 50px;
    // background: ${({primary})=> (primary ? '#01BF71' : '#010606')};
    background: radial-gradient(50% 50% at 50% 50%, #FFC640 47.4%, #F2AF13 100%);
<<<<<<< Updated upstream
=======
>>>>>>> 377c8fbb8382c6accc0694dcdc5e17952532059b
>>>>>>> Stashed changes
    white-space: nowrap;
    color: ${({dark})=> (dark ? '#010606' : '#F2AF13')};
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig})=> (fontBig ? '30px' : '30px')};
    border: none;
    curson: pointer;
    display: flex;
    height: 64px;
    width: 391px;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#fff' : '#01BF71')};
    }
`
