import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from './theme';

const {  pureBlack, pureWhite, primaryLinkColor } = theme;



const NavWrapper = styled.nav`
  width: 100%;
`;
const List = styled.ul`
  color: ${pureWhite};
  text-align: right;
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
    text-align: left;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${pureWhite};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;

  &:hover {
    color: ${primaryLinkColor}
  }
`;

export default function header()  {
    return (
    <NavWrapper>
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
