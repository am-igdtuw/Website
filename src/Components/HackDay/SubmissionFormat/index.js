import React from "react";
import {
  Container,
  List,
  MainHeading,
  TrackCon,
  TrackHeading,
  ListItem,
} from "./SubmissionFormat";

const SubmissionFormat = () => {
  return (
    <>
      <Container>
        <MainHeading>Submission Format</MainHeading>

        <TrackCon>
          <TrackHeading>Hackathon Submission Format</TrackHeading>
          <List>
            <ListItem>
              {" "}
              A video demonstration of your project - Time Limit upto 3 minutes.
            </ListItem>
            <ListItem>
              {" "}
              Presentation with the following mandatory slides (adding anything
              else is optional) Maximum Slides (8 Slides)
              <ul>
                <ListItem>Problem Statement</ListItem>
                <ListItem>Architecture</ListItem>
                <ListItem>How your idea is outstand from others</ListItem>
                <ListItem>Challenges faced</ListItem>
                <ListItem>Prototype</ListItem>
              </ul>
            </ListItem>
            <ListItem>Prototype link(view access to everyone)</ListItem>
          </List>
        </TrackCon>

        {/* <TrackCon>
          <TrackHeading>Ideathon Submission Format</TrackHeading>
          <List>
            <ListItem>
              {" "}
              A video demonstration of your project - Time Limit upto 3 minutes.
            </ListItem>
            <ListItem>
              {" "}
              Presentation with the following mandatory slides (adding anything
              else is optional) Maximum Slides (8 Slides)
              <ul>
                <ListItem>Problem Statement</ListItem>
                <ListItem>Architecture</ListItem>
                <ListItem>How your idea is outstand from others</ListItem>
                <ListItem>Challenges faced</ListItem>
                <ListItem>Prototype</ListItem>
              </ul>
            </ListItem>
            <ListItem>Prototype link(view access to everyone)</ListItem>
          </List>
        </TrackCon> */}

        {/* <TrackCon>
          <TrackHeading>Ideathon Submission Format</TrackHeading>
          <List>
            <ListItem>
              {" "}
              A video demonstration of your project - Time Limit upto 3 minutes.
            </ListItem>
            <ListItem>
              {" "}
              Presentation with the following mandatory slides (adding anything
              else is optional) Maximum Slides (8 Slides)
              <ul>
                <ListItem>Problem Statement</ListItem>
                <ListItem>Architecture</ListItem>
                <ListItem>How your idea is outstand from others</ListItem>
                <ListItem>Challenges faced</ListItem>
                <ListItem>Prototype</ListItem>
              </ul>
            </ListItem>
            <ListItem>Prototype link(view access to everyone)</ListItem>
          </List>
        </TrackCon> */}
      </Container>
    </>
  );
};

export default SubmissionFormat;
