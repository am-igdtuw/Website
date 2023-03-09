import React from 'react'
import {useState} from 'react'
import { HeroContainer, HeroH1 , HeroContent, Accordian,Title,Content, Item} from './FaqElements'

const FaqSection = () => {
    const[selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }

        setSelected(i)
    }


  return (
    <HeroContainer>
        <HeroContent>
         <HeroH1>FAQs</HeroH1>
         <Accordian >
            {data.map((item,i)=>(
                <Item >
                    <Title onClick={()=>toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </Title>
                    <Content>
                        {item.answer}
                    </Content>
                    
                </Item>

            ))}

         </Accordian>
        </HeroContent>
    </HeroContainer>
  )
}

const data = [
    {
        question: 'Frequently asked Question 1',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },

    {
        question: 'Frequently asked Question 2',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },

    {
        question: 'Frequently asked Question 3',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },

    {
        question: 'Frequently asked Question 4',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },



]

export default FaqSection