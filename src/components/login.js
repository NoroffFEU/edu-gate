import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.section`
  width: 100%;
  margin-top: 50px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px){
    margin: auto;
    width: 350px;
  }
`;

const HeaderTitle = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  text-align: center;
  line-height: 84px;
  margin-bottom: 14px
  color: ${({ theme }) => theme.pureWhite};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px){
    
  }
`;

const InputWrapper = styled.label`
  display: inline-block;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 14px;
`;

const Input = styled.input`
  border-radius: 10px
  display: inline-block;
  font-size: 16px
  height: 31px;
  margin: 10px 0;
  padding: 0 10px;
  width: 229px;
  outline: none;
  border: none;
`;

const Button = styled.input`
  background: ${({ theme }) => theme.pureWhite};
  border-radius: 10px
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  height: 34px;
  margin: 10px 0;
  width: 81px;
  outline: none;
  border: none;
`;

const InfoWrapper = styled.label`
  color: ${({ theme }) => theme.pureWhite};
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 43px;

  color: #000000;
`;

const Div = styled.label`
  margin-bottom: 11px;
`;


export default function Login() {
  return (
    <MainWrapper>
      <Wrapper>
        <HeaderTitle>Log In</HeaderTitle>
        <form style={{ width: '229px' }}>
          <Div>
            <InputWrapper>
              Username
            </InputWrapper>
            <Input type="text" />
          </Div>
          <Div>
            <InputWrapper>
              Password
            </InputWrapper>
            <Input type="password" />
          </Div>
          <InfoWrapper>
            Forgot your password? Click &nbsp;
            <Link
              to="/forgotPassword"
              style={{
                color: '#000', fontWeight:'bold', textDecoration: 'none' }}
            >
              here
            </Link>
          </InfoWrapper>
          <Button type="submit" value="Submit" />
          <InfoWrapper>
            Are you new? Click &nbsp;
            <Link 
              to="/signup" 
              style={{ 
                color: '#000', fontWeight:'bold', textDecoration: 'none' }}>
                here
            </Link>
          </InfoWrapper>
        </form>
      </Wrapper>
    </MainWrapper>
  );
} 

