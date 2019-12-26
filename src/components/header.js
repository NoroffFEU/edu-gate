import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bool } from "prop-types";

const NavWrapper = styled.nav`
  display: block;
  width: 100%;

  @media (max-width: 768px){
    display: ${({ open }) => open ? "block" : "none"};
  }
`;

const HomeList = styled.ul`
  color: ${({ theme }) => theme.pureWhite};
  display: inline-block;
  padding: 0 0 0 50px;
  text-align: left;
  width: 20%;

  @media (max-width: 768px){
    padding: 0;
    width: 100%;
    margin: 0;
  }
`;

const List = styled.ul`
  color: ${({ theme }) => theme.pureWhite};
  display: inline-block;
  text-align: right;
  padding: 0 50px 0 0;
  width: 80%;
  
  @media (max-width: 768px){
    padding: 0;
    width: 100%;
    margin: 0;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  padding: 5px;
  text-transform: lowercase;
  width: 123px;
  text-align: center;
  
  @media (max-width: 768px){
    display: block;
    text-align: left;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.pureWhite};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  transition: color 0.3s linear;
  text-transform: capitalize;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.pureWhite};
    padding-bottom: 1px;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.pureWhite};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.pureWhite};
    padding-bottom: 1px;
  }
`;

export default function header({ open })  {
  return (
    <NavWrapper open={open}>
      <HomeList>
        <ListItem>
          <HomeLink to="/">Edugate</HomeLink>
        </ListItem>
      </HomeList>
      <List>
        <ListItem>
          <StyledLink to="/about">About</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </ListItem>
      </List>
    </NavWrapper>
  );
}

header.propTypes ={
  open: bool.isRequired,
};
