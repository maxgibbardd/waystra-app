import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Light Mode */
    --txt-light: #2D2D2D;
    --bg-light: #F5F9FC;
    --prm-light: #0077B6;
    --scnd-light: #48CAE4;
    --ac-light: #FF6B6B;

    /* Dark Mode */
    --txt-dark: #E0E0E0;
    --bg-dark: #1A1A2E;
    --prm-dark: #005B96;
    --scnd-dark: #0096C7;
    --ac-dark: #FF3B3B;

    /* Fonts */
    --font-prm: 'Rajdhani', sans-serif;
    --font-scnd: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-scnd); /* Default to Poppins */
    background-color: var(--bg-light);
    color: var(--txt-light);
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
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
