import React from 'react'
import { TechContainer, TechH1, TechWrapper, TechCard, TechIcon, TechH2, TechP } from './Elements';
const Tech= () => {
  return (
    <>
        <TechContainer id="team">
            <TechH1>Team Lead</TechH1>
            <TechWrapper>
                <TechCard>
                    <TechIcon src={Icon1} />
                    <TechH2>Name of the Team Lead</TechH2>
                    <TechP>Description</TechP>
                </TechCard>
            </TechWrapper>

            <TechH1>Team Cores</TechH1>
            <TechWrapper>
                <TechCard>
                    <TechIcon src={Icon1} />
                    <TechH2>Name of the Team Core</TechH2>
                    <TechP>Description</TechP>
                </TechCard>
                <TechCard>
                    <TechIcon src={Icon1} />
                    <TechH2>Name of the Team Core</TechH2>
                    <TechP>Description</TechP>
                </TechCard>
            </TechWrapper>

            <TechH1>Team Co-Ordinators</TechH1>
            <TechWrapper>
                <TechCard>
                    <TechIcon src={Icon1} />
                    <TechH2>Name of the Team Member</TechH2>
                    <TechP>Description</TechP>
                </TechCard>
                <TechCard>
                    <TechIcon src={Icon1} />
                    <TechH2>Name of the Team Member</TechH2>
                    <TechP>Description</TechP>
                </TechCard>
                <TechCard>
                    <TechIcon src={Icon1} />
                    <TechH2>Name of the Team Member</TechH2>
                    <TechP>Description</TechP>
                </TechCard>
            </TechWrapper>
        </TechContainer>
    </>
  )
}

export default Tech;