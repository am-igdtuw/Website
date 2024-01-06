import React from "react";
import {
    InfoRow,
    ServicesContainer,
    ServicesH1,
    ServicesCard,
    ServicesIcon,
    ServicesH2
} from './EventCardElement';


const EventCards = ({ eventName, eventDescription, icon }) => {
    return (
        <>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={icon} alt="Event Icon" />
                <InfoRow>
                  <ServicesH1>{eventName}</ServicesH1>
                  <ServicesH2>{eventDescription}</ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
        </>
    );
}

export default EventCards;