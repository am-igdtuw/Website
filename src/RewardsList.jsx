// RewardsList.js
import './RewardsList.css';

const rewardsData = [
  { amount: '4,000', currency: 'INR', track: 'Reimagine Track winner', place: 'First Place' },
  { amount: '3,000', currency: 'INR', track: 'VBC', place: 'First Place' },
  { amount: '6,000', currency: 'INR', track: 'Reimagine Orflax Track', place: 'First Place' },
  { amount: '6,000', currency: 'INR', track: 'Ideathon', place: 'First Place, Second Place' },
  { amount: '100', currency: 'USDT', track: 'Hackathon AI Track', place: 'First Place' },
  { amount: '100', currency: 'USDT', track: 'Hackathon Web3 Track', place: 'First Place' },
];

const Reward = ({ amount, currency, track, place }) => (
    <div className="reward">
        <div className="reward-track">
            <div className='amount'>{amount} {currency}</div>
            <div>{track}</div>
        </div> 
        <div className="reward-amount">
            <span className="place">{place}</span>
            <span>{amount} {currency}</span>
        </div>     
    </div>
);

const RewardsList = () => (
  <div className="rewards-list">
    <h2>Rewards</h2>
    <div className="reward-grid">
      {rewardsData.map((reward, index) => (
        <Reward key={index} {...reward} />
      ))}
    </div>   
  </div>
);

export default RewardsList;
