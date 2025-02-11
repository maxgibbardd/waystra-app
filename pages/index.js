import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import WaveBackground from "./components/WaveBackground";
import styled from "styled-components";

const Container = styled.div`
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 50px;
  color: var(--prm-light);
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Waystra - AI Travel Planner</title>
      </Head>

      <Navbar />
      <WaveBackground />

      <Container>
        <Title>Waystra</Title>
        <p>Find your way quickly and easily with our AI-powered travel assistance.</p>
        <Image src="/imgs/Number_1.avif" width={150} height={150} alt="Step 1" />
        <Image src="/imgs/Number_2.jpg" width={150} height={150} alt="Step 2" />
        <Image src="/imgs/Number_3.jpg" width={150} height={150} alt="Step 3" />
      </Container>
    </div>
  );
}
