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

  @media (min-width: 768px){
    margin: auto;
    width: 350px;
  }
`;

const HeaderTitle = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  text-align: center;
  line-height: 24px;
  color: ${({ theme }) => theme.pureWhite};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px){
    font-size: 80px;
  }
`;

const InputWrapper = styled.label`
  width: 100%;
  display: inline-block;
`;

const InfoWrapper = styled.label`
  color: ${({ theme }) => theme.pureWhite};
  width: 100%;
  display: inline-block;
`;

const Input = styled.input`
  border-radius: 10px
  display: inline-block;
  font-size: 16px
  height: 31px;
  margin: 10px 0;
  padding: 0 10px;
  width: 100%;
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
  width: 77px;
`;

export default function Login() {
  return (
    <MainWrapper>
      <Wrapper>
        <HeaderTitle>Log In</HeaderTitle>
        <form>
          <InputWrapper>
            Username
            <Input type="text" />
          </InputWrapper>
          <InputWrapper>
            Password
            <Input type="password" />
          </InputWrapper>
          <InputWrapper>Forgot your password? Click <Link to="/forgotPassword">here</Link></InputWrapper>
          <Button type="submit" value="Submit" />
          <InfoWrapper>Are you new? Click <Link to="/signup">here</Link></InfoWrapper>
        </form>
      </Wrapper>
    </MainWrapper>
  );
} 

