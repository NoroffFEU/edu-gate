import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useInputChange } from '../hooks/index';
import { CommonContext } from '../context/commonContext';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoriFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
  width: 100%;
`;

const ChildFlexWrapper = styled.label`
  width: 48%;
  display: inline-block;
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

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const { setCommonState, commonState } = useContext(CommonContext);

  const onSubmit = async(data) => {
    try {
      setCommonState(Object.assign({}, commonState, { isFetching: true }));
      /**
     * TODO
     * 1. save the payload(response) returned from the request so we can use the use's info across this app
     * 2. save the domain to the env (webpack)
     * 2. Solve the cors error from the server side
     */
      const response = await axios.post('https://edugatee.herokuapp.com/api/v1/users/signup', data);
      setCommonState(Object.assign({}, commonState, { isFetching: false }));
    }
    catch(error) {
      console.log(error);
      setCommonState(Object.assign({}, commonState, { isFetching: false }));
    }
  };

  return (
    <MainWrapper>
      <Wrapper>
        <HeaderTitle>Sign Up</HeaderTitle>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <InputWrapper>
            Email
            <Input ref={ register } type="email" name="email" />
          </InputWrapper>
          <HoriFlexWrapper>
            <ChildFlexWrapper>
              First Name
              <Input ref={ register } type="text" name="firstname" />
            </ChildFlexWrapper>
            <ChildFlexWrapper>
              Surname
              <Input ref={ register } type="text" name="surname" />
            </ChildFlexWrapper>
          </HoriFlexWrapper>
          <InputWrapper>
            Password
            <Input ref={ register } type="password" name="password" />
          </InputWrapper>
          <InputWrapper>
            Confirm Password
            <Input ref={ register } type="password" name="confirmPassword" />
          </InputWrapper>
          <Button type="submit" value="Submit" />
          <InfoWrapper>Back to <Link to="/login">login</Link></InfoWrapper>
        </form>
      </Wrapper>
    </MainWrapper>
  );
} 

