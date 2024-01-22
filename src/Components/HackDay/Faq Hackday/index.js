import React from 'react';
import { useState } from 'react';
import { HeroContainer, HeroH1, HeroContent, Accordian, Title, Content, Item, InputBox1, InputBox2, SubmitButton, FaqBox } from './FaqElements.js';
//import DynamicBackground from '../Herosection/DynamicBg.js';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
    const [email, setEmail] = useState('');
    const [doubt, setDoubt] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDoubtChange = (e) => {
        setDoubt(e.target.value);
    };

    const handleSubmission = () => {
        // You can handle the submission of email and doubt here
        console.log('Email:', email);
        console.log('Doubt:', doubt);

        // Reset the input values after submission if needed
        setEmail('');
        setDoubt('');
    };

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    };

    return (
        <>
            <HeroContainer>
                {/* <DynamicBackground  /> */}
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
        </>
    );
};

export default FAQHackday;
