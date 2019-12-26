import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
`;

const HeaderTitle = styled.h1`
font-family: Lato;
font-style: normal;
font-weight: 900;
font-size: 70px;
line-height: 84px;
color: ${({ theme }) => theme.pureWhite};

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Description = styled.p`
font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
color: ${({ theme }) => theme.pureBlack};
`;

const NavWrapper = styled.nav`
  width: 100%;
`;

const List = styled.ul`
  color: ${({ theme }) => theme.pureWhite};
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  padding: 5px;
  text-transform: lowercase;
  width: 123px;
  text-align: center;
  

  @media (max-width: 768px){
    display: block;
    text-align: center;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.pureWhite};
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  text-transform: lowercase;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.pureWhite};
    padding-bottom: 1px;
  }
`;

export default function home () {
  return (
    <Wrapper>
      <HeaderTitle>Edugate</HeaderTitle>
      <NavWrapper>
        <List>
          <ListItem>
            <StyledLink to="/signup">Sign up</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/login">Log in</StyledLink>
          </ListItem>
        </List>
      </NavWrapper>
      <Description>
          Welcome to Edugate, the platform that let you access your
           results online
      </Description>
    </Wrapper>
  );
}
