import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.section`
  width: 100%;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderTitle = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  text-align: center;
  line-height: 84px;
  margin: 14px 0;
  color: ${({ theme }) => theme.pureWhite};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BodyText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  height: 36px;
  color: #000000;
`;


const Success = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <HeaderTitle>Success!</HeaderTitle>
        <BodyText>
          Please check your email for instructions on how to verify your account.
        </BodyText>
      </Wrapper>
    </MainWrapper>
  );
};


export default Success;
