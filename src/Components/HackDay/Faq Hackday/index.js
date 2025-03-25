import React, { useState } from 'react';
import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    padding: 50px 30px;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 480px) {
    padding: 8px 10px;
  }
`;

export const HeroH1 = styled.h1`
  display: flex;
  align-items: center;
  border-left: 7px solid goldenrod;
  padding-left: 10px;
  font-size: 1.9rem;
  color: white;
  margin-bottom: 30px;
  align-self: flex-start;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const Accordian = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  border-radius: 24px 24px 0px 0px;
  padding: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #f2af13;
  color: black;
  transition: background 0.3s ease;

  h2 {
    margin: 0;
    font-size: 16px;
    flex-grow: 1;
  }

  span {
    font-size: 20px;
    margin-left: 10px;
  }

  &:hover {
    background: #e99d0b;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
    
    h2 {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  color: white;
  padding: 24px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  height: ${({ selected }) => (selected ? 'auto' : '0')};
  opacity: ${({ selected }) => (selected ? '1' : '0')};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border-radius: 0px 0px 24px 24px;
  background: linear-gradient(90deg, rgba(255, 198, 64, 0.5) 0%, rgba(169, 169, 169, 0.67) 100%);
  font-size: 14px;

  @media screen and (max-width: 480px) {
    padding: 16px;
  }
`;

const data = [
  {
    question: 'When was AssetMerkle IGDTUW established?',
    answer: 'AssetMerkle IGDTUW was established in January 2023 at IGDTUW'
  },
  {
    question: 'What is AssetMerkle?',
    answer: 'AssetMerkle IGDTUW is the first Web3-based club at IGDTUW. Our society intends to provide a platform for students to familiarize themselves with the professional world and gain practical experience in blockchain and Web3 technology.'
  },
  {
    question: 'What is the aim of AssetMerkle IGDTUW?',
    answer: 'Our aim is to bridge the gap between academic learning and real-world challenges in the field of blockchain and Web3 technology. With the growing importance of Web3 technology in the industry, we believe it is crucial for students to gain practical skills in this field.'
  },
  {
    question: 'Can I be a part of AssetMerkle IGDTUW?',
    answer: 'Yes, you can join our WhatsApp community and be a part of AssetMerkle IGDTUW.'
  },
  {
    question: 'I am from BBA, can I still be a part of this community?',
    answer: 'Absolutely! AssetMerkle encourages participation from individuals of all academic backgrounds, including BBA, and values the diverse skills they bring to the community.'
  },
  {
    question: 'I know nothing about web3, can I be a part of AssetMerkle IGDTUW?',
    answer: 'Certainly! AssetMerkle IGDTUW welcomes individuals with varying levels of knowledge, and if you are new to web3, we have got you covered. We offer mentor sessions, workshops, and other resources to help clear up your doubts and ensure that everyone, regardless of their background, can actively participate and learn within our community.'
  },
];

const FAQHackday = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>FAQs</HeroH1>
        
        <Accordian>
          {data.map((item, i) => (
            <Item key={i}>
              <Title onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </Title>
              <Content selected={selected === i}>
                {item.answer}
              </Content>
            </Item>
          ))}
        </Accordian>
      </HeroContent>
    </HeroContainer>
  );
};

export default FAQHackday;