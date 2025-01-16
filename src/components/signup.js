import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loadingAction } from '../actions/loadingAction';

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
  color: ${({ theme }) => theme.pureWhite};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px){
    
  }
`;

const InputWrapper = styled.label`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  height: 36px;
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

const Input = styled.input`
  border-radius: 10px
  display: inline-block;
  font-size: 16px
  height: 31px;
  margin-top: 11px;
  padding: 0 10px;
  width: 100%;
  border: none;
  outline: none;
`;

const Button = styled.input`
  background: ${({ theme }) => theme.pureWhite};
  border-radius: 10px;
  border: 1px solid rgb(65,127,126);
  cursor: pointer;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  height: 34px;
  margin: 10px 0;
  width: 77px;
  border: none;
  outline: none;
`;

const Div = styled.div`
  margin-bottom: 11px;
`;

function SignUp({ loading, loadingState }) {
  
  useEffect(() => {
      loading(true);
  }, []);


  return (
    <MainWrapper>
      <Wrapper>
        <HeaderTitle>Sign Up</HeaderTitle>
        <form style={{ width: '245px' }}>
          <Div>
            <InputWrapper>
              Email
            </InputWrapper>
            <Input type="email" />
          </Div>
          <Div>
            <HoriFlexWrapper>
              <ChildFlexWrapper>
                First Name
                <Input type="text" />
              </ChildFlexWrapper>
              <ChildFlexWrapper>
                Surname
                <Input type="text" />
              </ChildFlexWrapper>
            </HoriFlexWrapper>
          </Div>
          <Div>
            <InputWrapper>
              Password
            </InputWrapper>
            <Input type="password" />
          </Div>
          <Div>
            <InputWrapper>
              Confirm Password
            </InputWrapper>
            <Input type="password" />
          </Div>
          <Button type="submit" role="button" value="Submit" />
          <InfoWrapper>Back to &nbsp;<Link to="/login" style={{ color: '#000', fontWeight:'bold', textDecoration: 'none' }}>login</Link></InfoWrapper>
        </form>
      </Wrapper>
    </MainWrapper>
  );
}

const mapStateToProps = (store) => {
    return {
        loadingState: store.loading
    }
}

const mapDispatchToProp = {
    loading: status => loadingAction(status)
}

export default connect(mapStateToProps, mapDispatchToProp)(SignUp);
