import React from 'react'
import styled from 'styled-components';
import { SidebarData } from './SidebarData';

const StyledTeamSidebar = styled.div`
  position: sticky;
  
  align-items:center;
  top:200px;
  left:0px;
  margin-top: 100px;
  height: 410px;
  width: 220px;
  background-color:rgba(255,255,255,0.2);
  opacity:1;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    
  }
  @media screen and (max-width: 480px) {
    
}

`;
const StyledSidebarList = styled.ul`
  height: auto;
  padding:0;
  width:80px;
  
  @media (max-width: 768px) {
    /* Add responsive styles for the list */
  }
  @media screen and (max-width: 480px) {
    
}
  
  
`;
const StyledRow = styled.li`
  height:82px;
  width: 100%;
  &:hover {
    width: 200px;
  }
  
  margin:0%;
  list-style-type: none;
  display: flex;
  border-bottom: 1px solid yellow;
  color: yellow;
  justify-content: center;
  align-items: center;
  
  transition: color 0.3s; 
  &:hover {
    background: linear-gradient(45deg, #FFC640, #FFC640);
    border: 0.5px solid #000000;
    color: #000000;
    border-radius:20px;
  }
  @media (max-width: 768px) {
    /* Add responsive styles for the list items */
    
  }
  @media screen and (max-width: 480px) {
    
}
`;
const StyledContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    /* Add responsive styles for the list items */
  }
`;
const StyledIcon = styled.div`
img {
  height: 50px; 
  
  }
flex:30%
place-items: center;
display: grid;
@media (max-width: 768px) {
  /* Add responsive styles for the list items */
}
@media screen and (max-width: 480px) {
  
} 
`;
const StyledTitle = styled.div` 
flex: 70%;
padding:0;
opacity: 0; /* Title initially hidden */
  transition: opacity 0.3s;
  ${StyledRow}:hover & {
    opacity: 1;
    color: white;
    font-weight: bold;
     /* Show title on hover */
  }
  
@media (max-width: 768px) {
  /* Add responsive styles for the list items */
}
@media screen and (max-width: 480px) {
  
}

`;
const TeamSidebar = () => {
  return (
    <StyledTeamSidebar>
    <div className='TeamSidebar'>
    <StyledSidebarList>
      
      {SidebarData.map((val, key) => {
        return (
          <StyledRow 
          key={key} 
          className='row'
          onClick={()=> {
            window.location.href = val.link;
            }}
            >
            {" "}
            <StyledContent>
            <StyledIcon>{val.icon}</StyledIcon>{" "}
            <StyledTitle>{val.title}
            </StyledTitle>
            </StyledContent>
          </StyledRow>
        );
      })}
      </StyledSidebarList>
      
      </div>
      </StyledTeamSidebar>
  )
}

export default TeamSidebar