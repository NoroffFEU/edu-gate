import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
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

const ErrorList = styled.ul`
  color: red;
  margin: 0;
  padding-left: 20px;
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
  const { register, errors: customErrors, reset, handleSubmit, getValues } = useForm();
  const { setCommonState, commonState } = useContext(CommonContext);
  const [ errors, setErrors ] = useState({});

  const onSubmit = async(data) => {
    console.log('api url  ====', process.env.API_URL);
    try {
      setCommonState(Object.assign({}, commonState, { isFetching: true }));
      await axios.post(`${process.env.API_URL}users/signup`,
        data);
      setCommonState(Object.assign({}, commonState, { isFetching: false }));
      reset();
      /**
     * TODO
     * 1. Create a success page
     * 2. route to the page
     * 3. abstract ErrorList to a new component and import it here
     */
    }
    catch(error) {
      setErrors({ ...error.response.data });
      setCommonState(Object.assign({}, commonState, { isFetching: false }));
    }
  };

  const confirmPassword = (value) => {
    const { password } = getValues();
    if(value !== password) return 'Passwords should match!';
    return true;
  };

  return (
    <MainWrapper>
      <Wrapper>
        <HeaderTitle>Sign Up</HeaderTitle>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <InputWrapper>
            Email
            <ErrorList>{ errors.errors && errors.errors.email !== undefined  ? errors.errors.email.map((item,index) => <li key={index}>{item}</li>) : ''}</ErrorList>
            <Input ref={ register({ required: true }) } name="email" />
          </InputWrapper>
          <HoriFlexWrapper>
            <ChildFlexWrapper>
              First Name
              <Input ref={ register } type="text" name="first_name" />
            </ChildFlexWrapper>
            <ChildFlexWrapper>
              Surname
              <Input ref={ register } type="text" name="last_name" />
            </ChildFlexWrapper>
          </HoriFlexWrapper>
          <InputWrapper>
            Password
            <ErrorList>{ errors.errors && errors.errors.password !== undefined  ? errors.errors.password.map((item,index) => <li key={index}>{item}</li>) : ''}</ErrorList>
            <Input ref={ register({ required: true }) } type="password" name="password" />
          </InputWrapper>
          <InputWrapper>
            Confirm Password
            
            <ErrorList>{ customErrors.confirmPassword && (
              <li>
                { customErrors.confirmPassword.message }
              </li>
            ) }</ErrorList>
            <Input ref={ register({ required: true, validate: confirmPassword }) } type="password" name="confirmPassword" />
          </InputWrapper>
          <Button type="submit" value="Submit" />
          <InfoWrapper>Back to <Link to="/login">login</Link></InfoWrapper>
        </form>
      </Wrapper>
    </MainWrapper>
  );
} 

