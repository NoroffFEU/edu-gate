import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.pureWhite};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 768px){
    cursor: pointer;
    display: flex;
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={ () => setOpen(!open) }>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes ={
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;