import React from 'react';
import { useState } from 'react';
import { HeroContainer, HeroH1, HeroContent, Accordian, Title, Content, Item } from './FaqElements';
import DynamicBackground from '../Herosection/DynamicBg.js';

const data = [
    {
        question: 'When was AssetMantle IGDTUW established?',
        answer: 'In January of 2023'
    },
    {
        question: 'What is AssetMantle?',
        answer: 'AssetMantle is your go-to platform for all things NFT. They empower creators and collectors to build, innovate, and securely transact digital assets on the blockchain.'
    },
    {
        question: 'What is the aim of AssetMantle IGDTUW?',
        answer: 'Our aim is to create a web3 and blockchain-oriented teaching and learning group to answer all your queries related to blockchain technology.'
    },
    {
        question: 'Can I be a part of AssetMantle IGDTUW?',
        answer: 'Yes, you can join our WhatsApp community and be a part of AssetMantle IGDTUW.'
    },
    {
        question: 'I am from BBA, can I still be a part of this community?',
        answer: 'Of course! Some members of our team are from non-tech branches.'
    },
    {
        question: 'I know nothing about web3, can I be a part of AssetMantle IGDTUW?',
        answer: 'Surely! We are here to clear up your doubts with mentor sessions, workshops, etc.'
    },
    {
        question: 'Is AssetMantle only about web3?',
        answer: 'No! We aim to educate everyone about web3, but we delve into other technologies too.'
    }
];

const FaqSection = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    };

    return (
        <HeroContainer>
            <DynamicBackground  />
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

export default FaqSection;
