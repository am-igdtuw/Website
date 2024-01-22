import React from 'react';
import { useState } from 'react';
import { HeroContainer, HeroH1, HeroContent, Accordian, Title, Content, Item, InputBox1,InputBox2,SubmitButton,FaqBox, FaqInsidBox  } from './FaqElements';
import DynamicBackground from '../../HomePage/Herosection/DynamicBg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    {
        question: 'Is AssetMerkle only about web3?',
        answer: 'No! AssetMerkle is not solely focused on web3; while we aim to educate everyone about web3, we also delve into other cutting-edge technologies, fostering a comprehensive learning environment that extends beyond blockchain.'
    }
];

const FaqSection = () => {
    const [selected, setSelected] = useState(null);
    const [email, setEmail ] = useState('');
    const [message, setMessage] = useState('');
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleDoubtChange = (e) => {
        setMessage(e.target.value);
      };
    
      const handleSubmission = async(e) => {
          e.preventDefault();
          //   console.log(email, message);
          
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address.', {
                position: 'bottom-center',
                style: {
                    width: "400px", 
                    background: "black",
                    color: "white", 
                },
            });
            return; 
          }
          
          try {
              const response = await fetch('https://am-website-w70g.onrender.com/api/faq', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ email, message }),
              });

              if (response.ok) {
                  const data = await response.json();
                  //   console.log(data);
                  toast.success("Message received! Decryption in progress, expect a reply shortly!  🚀", {
                      position: "bottom-center",
                      style: {
                          width: "400px", 
                          background: "black",
                          color: "white", 
                      },
                  });
                  setEmail('');
                  setMessage('');
              } else {
                  console.error('Submission failed');
                  toast.error('Uh-oh! Hit a blockchain snag. Refresh and try again! 🌐', {
                    position: "bottom-center",
                    style: {
                        width: "400px", 
                        background: "black",
                        color: "white", 
                    },
                  });
            }
          } catch (error) {
              console.error('Error:', error);
              toast.error('Uh-oh! Hit a blockchain snag. Refresh and try again! 🌐', {
                position: "bottom-center",
                style: {
                    width: "400px", 
                    background: "black",
                    color: "white", 
                },
              });
          }
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
                <FaqBox>
                    <FaqInsidBox>
                        <InputBox1
                            type="email"
                            placeholder="Your Email..."
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <FaqInsidBox>
                        {/* Doubt Input */}
                            <InputBox2
                                type="text"
                                placeholder="Ask your doubt..."
                                value={message}
                                onChange={handleDoubtChange}
                            />
                            <SubmitButton  onClick={handleSubmission}>
                                <FontAwesomeIcon icon={faPaperPlane}  />
                            </SubmitButton>
                        </FaqInsidBox>
                    </FaqInsidBox> 
                </FaqBox>
            </HeroContent>
        </HeroContainer>
        <ToastContainer />
        </>
    );
};

export default FaqSection;
