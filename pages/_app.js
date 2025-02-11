import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --txt-light: #2D2D2D;
    --bg-light: #F5F9FC;
    --prm-light: #0077B6;
    --scnd-light: #48CAE4;
    --ac-light: #FF6B6B;
    --txt-dark: #E0E0E0;
    --bg-dark: #1A1A2E;
    --prm-dark: #005B96;
    --scnd-dark: #0096C7;
    --ac-dark: #FF3B3B;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--bg-light);
    color: var(--txt-light);
    font-family: 'Poppins', sans-serif;
    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  }

  .dark-mode {
    background-color: var(--bg-dark);
    color: var(--txt-dark);
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}