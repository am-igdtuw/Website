import React from 'react';
import './RewardList.css';

const rewardsData = [
  {
    amount: '4,000',
    currency: 'INR',
    track: 'Reimagine Track winner',
    place: 'First Place',
    judgingCriteria: 'Based on the creativity level and easy fluidity of reimagined website.'
  },
  {
    amount: '3,000',
    currency: 'INR',
    track: 'VBC',
    place: 'First Place',
    judgingMode: 'Voting Mode'
  },
  {
    amount: '6,000',
    currency: 'INR',
    track: 'Reimagine Orflax Track',
    place: 'First Place',
    judgingMode: 'Voting Mode'
  },
  {
    amount: '6,000',
    currency: 'INR',
    track: 'Ideathon',
    place: 'First Place, Second Place',
    judgingMode: 'Voting Mode'
  },
  {
    amount: '100',
    currency: 'USDT',
    track: 'Hackathon AI Track',
    place: 'First Place',
    judgingMode: 'Voting Mode'
  },
  {
    amount: '100',
    currency: 'USDT',
    track: 'Hackathon Web3 Track',
    place: 'First Place',
    judgingMode: 'Voting Mode'
  }
];

const Reward = ({ amount, currency, track, place, judgingCriteria, judgingMode }) => (
  <div className='reward01'>
    <span className='track-heading'>{track}</span>

    <div className='reward'>
      <div className='reward-track'>
        <div className='amount'>{amount} {currency}</div>
        <div>{track}</div>
      </div>
      <div className='reward-amount'>
        <span className='place'>{place}</span>
        <span>{amount} {currency}</span>
      </div>
    </div>
    <div className='criteria'>
        {judgingCriteria && (
          <p className='mt-2 text-sm text-gray-500'>
            <span className='font-bold'>Judging Criteria: </span>{judgingCriteria}
          </p>
        )}
        {judgingMode && (
          <p className='mt-1 text-sm text-gray-500'>
            <span className='font-bold'>Judging Mode: </span>{judgingMode}
          </p>
        )}
      </div>
  </div>
);

const RewardsList = () => (
  <div className='rewards-list'>
    <h2>Rewards</h2>
    <div className='reward-grid'>
      {rewardsData.map((reward, index) => (
        <Reward key={index} {...reward} />
      ))}
    </div>
  </div>
);

export default RewardsList;
