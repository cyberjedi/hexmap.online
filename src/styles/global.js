import { createGlobalStyle } from 'styled-components'; // Assuming styled-components
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Merriweather:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: 'Roboto', sans-serif; /* Readable UI font */
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif; /* More thematic font for headings */
    color: ${colors.primary};
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  a {
    color: ${colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  * {
    box-sizing: border-box;
  }

  /* Responsive typography helpers (example) */
  html {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    h1 { font-size: 2em; }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
    h1 { font-size: 1.8em; }
  }
`;

export default GlobalStyle; 