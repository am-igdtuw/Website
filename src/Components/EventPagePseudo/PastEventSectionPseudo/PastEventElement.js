import styled from "styled-components";


export const InforContainer = styled.div`
    position: relative;
    padding: 80px 0 50px;
    z-index: 999;
    ::before{
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 230px;
    background-color: #f7bd00;
    }
`;

export const InforWrapper = styled.div`
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
 
`;

export const ServicesP = styled.div`
   display: flex;
    
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing:border-box;
`;

export const Date=styled.div`
` ;
