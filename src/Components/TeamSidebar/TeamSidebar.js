import React from 'react'
import styled from 'styled-components';
import { SidebarData } from './SidebarData';

const StyledTeamSidebar = styled.div`
  position: sticky;
  
  align-items:center;
  top:80px;
  left:0px;
  margin-top: 100px;
  height: 410px;
  width: 220px;
  background-color:rgba(255,255,255,0.2);
  opacity:1;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

`;
const StyledSidebarList = styled.ul`
  height: auto;
  padding:0;
  width:100%;
  
  
`;
const StyledRow = styled.li`
  height:82px;
  width: 100%;
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
  }
  
`;
const StyledContent = styled.div`
  display: flex;
  align-items: center;
  
`;
const StyledIcon = styled.div`
img {
  height: 50px; 
  
  }
flex:30%
place-items: center;
display: grid;

  
`;
const StyledTitle = styled.div` 
flex: 70%;
padding: 20px;


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
            {/* <StyledTitle>{val.title}
            </StyledTitle> */}
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