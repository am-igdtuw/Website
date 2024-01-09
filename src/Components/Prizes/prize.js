import React from 'react'
import { UserCard } from 'react-ui-cards';
import {Prizes, PrizesCard, PrizesH1} from './prizeElements';

function prize() {
  return (
    <>
    <Prizes>
    <PrizesH1>Prizes</PrizesH1>
        <PrizesCard>
    <UserCard
    float
    header='https://i.imgur.com/vRAtM3i.jpg'
    name='Frank Hepsfield'
    positionName='Software Engineering Manager'
/>
    <UserCard
    float
    header='https://i.imgur.com/vRAtM3i.jpg'
    name='Frank Hepsfield'
    positionName='Software Engineering Manager'
/>
    <UserCard
    float
    header='https://i.imgur.com/vRAtM3i.jpg'
    name='Frank Hepsfield'
    positionName='Software Engineering Manager'
/>
</PrizesCard>
</Prizes>
</>
  )
}

export default prize
