import styled from "styled-components";

export const Prizes = styled.div`
  background-color: #f7bd00;
  position: relative;
  height: 100%;
  padding: 50px 0 0px;
  width: 100%;
  margin: 20px 0;
  z-index: 1;
`;

export const PrizesCard = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center; /* Add this line to center-align items within the grid */
`;

export const PrizesH1 = styled.h1`
    text-align: center;
    margin: 0;
    width: 100%;
    padding: 50px 0 0px;
    font-size: 50px;
    font-weight: 600;
    `;
