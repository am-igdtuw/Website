import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 650px;
  padding: 28px;
  margin: 0 28px;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  text-align: left;
  color: #fff;
  padding-bottom: 8px;
  border-bottom: 1px solid silver;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
`;

const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding-bottom: 15px;
`;

const Label = styled.label`
  width: 95%;
  color: #fff;
  font-weight: bold;
  margin: 5px 0;
`;

const Input = styled.input`
  height: 40px;
  width: 95%;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

const Alert = styled.div`
  font-weight: bold;
  color: #fff;
`;

const ButtonContainer = styled.div`
  margin: 15px 0;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  display: block;
  font-size: 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-image: linear-gradient(to right, #aa076b, #61045f);
  cursor: pointer;
  transition: 0.3s;
`;

const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const GenderLabel = styled.label`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioCircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #fff7f7;
  margin-right: 10px;
  cursor: pointer;
`;

const RadioCheckedCircle = styled(RadioCircle)`
  background-color: #fffcfc;
`;

const App = () => {
  return (
    <Container>
      <Title>Registration Form</Title>
      <Content>
        <InputBox>
          <Label htmlFor="name">Full Name</Label>
          <Input type="text" placeholder="Enter Full Name" name="name" required />
        </InputBox>
        <InputBox>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Enter valid Email" name="email" required />
        </InputBox>
        <InputBox>
          <Label htmlFor="university">University Name</Label>
          <Input type="text" placeholder="Enter your University name" name="uniname" required />
        </InputBox>
        <InputBox>
          <Label htmlFor="mobile_num">Mobile Number</Label>
          <Input type="tel" placeholder="Enter your Mobile Number" name="mobnum" required />
        </InputBox>
        <InputBox>
          <Label htmlFor="ques">Question</Label>
          <Input type="text" placeholder="Why should we choose you" name="ques" required />
        </InputBox>
        <InputBox>
          <Label htmlFor="doubts">Any Doubts</Label>
          <Input type="text" placeholder="Ask your doubt if any" name="doubts" required />
        </InputBox>
        <span className="gender-title">Gender</span>
        <GenderContainer>
          <GenderLabel>
            <RadioInput type="radio" name="gender" value="male" />
            <RadioCircle className="radio-circle"></RadioCircle> Male
          </GenderLabel>
          <GenderLabel>
            <RadioInput type="radio" name="gender" value="female" />
            <RadioCircle className="radio-circle"></RadioCircle> Female
          </GenderLabel>
          <GenderLabel>
            <RadioInput type="radio" name="gender" value="other" />
            <RadioCircle className="radio-circle"></RadioCircle> Other
          </GenderLabel>
        </GenderContainer>
      </Content>
      <Alert>
        <p>On the basis of your response, you will be shortlisted. Wait for the email for further procedure.</p>
      </Alert>
      <ButtonContainer>
        <Button>Register</Button>
      </ButtonContainer>
    </Container>
  );
};

export default App;
