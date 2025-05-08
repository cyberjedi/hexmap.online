import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const HeaderWrapper = styled.header`
  background-color: ${colors.secondary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${colors.border};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  img {
    height: 40px; // Adjust as needed
    width: auto;
  }
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-left: 1.5rem;
  }

  a {
    color: ${colors.text};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.accent};
    }
  }

  @media (max-width: 768px) {
    li {
      margin-left: 0;
      margin: 0 0.5rem; /* Adjust spacing for mobile */
    }
    ul {
      justify-content: center; /* Center nav items on mobile */
      flex-wrap: wrap; /* Allow wrapping on small screens */
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        {/* Using relative path for assets as per requirements */}
        <img src="./assets/logo-placeholder.svg" alt="HexMap.Online Logo" />
      </Logo>
      <Nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header; 