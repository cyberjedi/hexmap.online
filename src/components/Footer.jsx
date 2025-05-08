import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const FooterWrapper = styled.footer`
  background-color: ${colors.secondary};
  color: ${colors.textSecondary};
  padding: 2rem;
  text-align: center;
  border-top: 2px solid ${colors.border};
  font-size: 0.9em;

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* For smaller screens */
  }

  li {
    margin: 0 0.75rem;
  }

  a {
    color: ${colors.textSecondary};
    text-decoration: none;

    &:hover {
      color: ${colors.accent};
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    li {
      margin: 0.25rem 0.5rem;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <p>&copy; {currentYear} HexMap.Online. All rights reserved. (Placeholder)</p>
      <nav>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact-footer">Contact</a></li>
        </ul>
      </nav>
    </FooterWrapper>
  );
};

export default Footer; 