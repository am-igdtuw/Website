import styled, { css, keyframes } from "styled-components";

export const OuterBorder = styled.div`
  border: 3px solid #ffc640;  
  padding: 5px;
  background: black;
`;

export const InnerBorder = styled.div`
  border: 2px solid #ffc640;
  padding: 8px;
`;


export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  padding-left: 20px; 
`;

export const VerticalText = styled.h1`
  font-size: 2.5rem;
  padding: 5px;
  color: #ffc640;
  writing-mode: vertical-lr;
  text-orientation: sideways; 
  transform: rotate(180deg);
  width: 5%;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
`;

export const TechContainer = styled.div`
  background: black;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

