import React from 'react';
import { TeamMembersCard, MemberImg, Memberh2, Memberp } from './TeamElements';

const TeamMemberCard = (props) => {
  const { name, role, imageUrl } = props;

  return (
    <TeamMembersCard>
      <MemberImg src={imageUrl} alt={`${name}`} ></MemberImg>
      <Memberh2>{name}</Memberh2>
      <Memberp>{role}</Memberp>
    </TeamMembersCard>
  );
};

export default TeamMemberCard;

