import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colors from '../styles/colors';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
`;

const MainContent = styled.main`
  flex-grow: 1; /* Takes up available space */
  padding: 2rem;
  max-width: 960px; /* Max width for content */
  margin: 0 auto; /* Center content */
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 3rem 1rem;
  background-color: ${colors.primary};
  border-radius: 8px;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.8em;
    color: ${colors.highlight};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2em;
    color: ${colors.text};
    max-width: 600px;
    margin: 0 auto 1.5rem auto;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    h1 {
      font-size: 2.2em;
    }
    p {
      font-size: 1.1em;
    }
  }
`;

const FeatureSection = styled.section`
  padding: 2rem 0;
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: ${colors.accent};
  }
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  li {
    background-color: ${colors.secondary};
    padding: 1.5rem;
    border-radius: 6px;
    border: 1px solid ${colors.border};
    h3 {
      color: ${colors.highlight};
      margin-top: 0;
    }
  }
`;

const LandingPage = () => {
  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <HeroSection id="hero">
          <h1>Welcome to HexMap.Online</h1>
          <p>
            Your ultimate tool for creating, managing, and sharing interactive hex maps for your tabletop RPG adventures. Bring your worlds to life!
          </p>
          {/* Placeholder for a call to action button */}
          {/* <button>Get Started</button> */}
        </HeroSection>

        <FeatureSection id="features">
          <h2>Key Features (Coming Soon)</h2>
          <ul>
            <li>
              <h3>Intuitive Map Creation</h3>
              <p>Easily draw and edit hex grids, place terrain, and add points of interest.</p>
            </li>
            <li>
              <h3>Real-time Collaboration</h3>
              <p>Work on maps with your players or fellow GMs simultaneously.</p>
            </li>
            <li>
              <h3>Discord Integration</h3>
              <p>Seamlessly embed and interact with your maps within Discord Activities.</p>
            </li>
            <li>
              <h3>Layer Management</h3>
              <p>Organize your map elements with powerful layer controls (GM vs Player view).</p>
            </li>
          </ul>
        </FeatureSection>

        {/* Add more sections like About, How it Works, etc. as needed */}

      </MainContent>
      <Footer />
    </PageWrapper>
  );
};

export default LandingPage; 