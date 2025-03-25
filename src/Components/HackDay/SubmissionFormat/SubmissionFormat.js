import styled from "styled-components"


export const Container = styled.div`
  min-height: 100vh;
  width: 80%;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 30px;
  color : white;
`;

export const MainHeading = styled.h1`
  font-size: 1.9rem;
  border-left: 7px solid goldenrod;
  font-weight: 750;
  padding-left: 10px;
  // color:black;
  margin : 5px 0px 20px 0px;
`;

export const TrackCon = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  margin-bottom : 10px;
`;

export const TrackHeading = styled.h2`
  font-size: 1.5rem;
  padding: 2px;
  text-decoration: underline;
  background: rgba(59, 130, 246, 0.5);
  font-weight: 650;
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  gap: 8px;

  ul {
    gap: 10px;
  }
`;

export const ListItem = styled.li`
  text-align: left;
  font-size: 17px;
  list-style-type: disc;
`;
