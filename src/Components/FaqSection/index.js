import React from 'react';
import { useState } from 'react';
import { HeroContainer, HeroH1, HeroContent, Accordian, Title, Content, Item } from './FaqElements';
import DynamicBackground from '../Herosection/DynamicBg.js';

const data = [
    {
        question: 'When was AssetMerkle IGDTUW established?',
        answer: 'AssetMerkle IGDTUW was established in January 2023 at IGDTUW'
    },
    {
        question: 'What is AssetMerkle?',
        answer: 'AssetMerkle is your go-to platform for all things NFT. They empower creators and collectors to build, innovate, and securely transact digital assets on the blockchain, providing a comprehensive ecosystem that facilitates the creation, management, and exchange of non-fungible tokens.'
    },
    {
        question: 'What is the aim of AssetMerkle IGDTUW?',
        answer: 'Our aim is to create a web3 and blockchain-oriented teaching and learning group to answer all your queries related to blockchain technology.'
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
    {
        question: 'Is AssetMerkle only about web3?',
        answer: 'No! AssetMerkle is not solely focused on web3; while we aim to educate everyone about web3, we also delve into other cutting-edge technologies, fostering a comprehensive learning environment that extends beyond blockchain.'
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
