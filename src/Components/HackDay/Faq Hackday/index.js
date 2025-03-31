//HackDay/Faq HackDay/Index.js
import React, { useState } from "react";
import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    padding: 50px 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 15px;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  padding: 8px 0px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 8px 10px;
  }
`;

export const HeroH1 = styled.h1`
  text-decoration: underline;
  display: flex;
  align-items: center;
  border-left: 7px solid goldenrod;
  padding-left: 10px;
  font-size: 1.9rem;
  color: white;
  margin-bottom: 30px;
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }

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
  font-family: "Poppins", sans-serif;
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
  font-family: "Poppins", sans-serif;
  height: ${({ selected }) => (selected ? "auto" : "0")};
  opacity: ${({ selected }) => (selected ? "1" : "0")};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border-radius: 0px 0px 24px 24px;
  background: linear-gradient(
    90deg,
    rgba(255, 198, 64, 0.5) 0%,
    rgba(169, 169, 169, 0.67) 100%
  );
  font-size: 14px;

  @media screen and (max-width: 480px) {
    padding: 16px;
    font-size: 13px;
  }
`;

const data = [
  {
    question: "How many members can participate in a team?",
    answer:'Minimum 2 and Maximum 4'
  },
  {
    question: "How do I register?",
    answer:
      'Hop on Devfolio, hit "Apply now," fill in your details, and you are in! Build or join a team and get ready for the ultimate hackathon experience.',
  },
  {
    question: "I haven't participated in a hackathon before. Can I still join?",
    answer:
      "Absolutely! Whether you are a pro or a newbie, it’s all about learning and having fun.",
  },
  {
    question: "Can team members be from different colleges?",
    answer: "Yes! Team up with anyone, anywhere.",
  },
  {
    question: "I don't have a team. What should I do?",
    answer:
      "No worries! Join our Discord and WhatsApp channel, meet participants, and find your dream team.",
  },
  {
    question: "Why should a fresher join?",
    answer:
      "It’s a vibe! Meet cool people, learn new skills, build projects, and have fun.",
  },
  {
    question: "Whom can I contact if I have further questions?",
    answer: "Ping our POCs or drop your queries on Discord!",
  },
  {
    question: "Does the hackathon have a theme?",
    answer: "Along with Web3, we’ve got AI tracks too. Explore what you love!",
  },
  {
    question: "Where will the hackathon take place?",
    answer:
      "This is a hybrid mode hackathon. The shortlisted teams will be invited for the final round in Delhi NCR.",
  },
  {
    question: "Is there support available during the hackathon?",
    answer:
      "Yes, we will have mentors, AMAs, and community support to help you throughout the hackathon.",
  },
  {
    question: "Can we submit old projects for the hackathon?",
    answer:
      "No, only projects built during the hackathon are allowed. Reused projects will lead to disqualification.",
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
                <span>{selected === i ? "-" : "+"}</span>
              </Title>
              <Content selected={selected === i}>{item.answer}</Content>
            </Item>
          ))}
        </Accordian>
      </HeroContent>
    </HeroContainer>
  );
};

export default FAQHackday;
