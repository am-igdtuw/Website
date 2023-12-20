import styled from 'styled-components';

export const ScrollToTopButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: #0D0A03; /* Choose your background color */
  color: #FFC640; /* Choose your text color */
  border: none;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index:1000;
`;

export const ArrowIcon = styled.span`
  font-size: 20px;
`;