import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Container = styled.div`
    max-width: 1000px;
    margin: 120px auto;
    padding: 20px;
    text-align: left;
`;

const Title = styled.h1`
    font-size: 60px;
    font-weight: 700;
    font-family: 'Rajdhani', sans-serif;
    color: var(--prm-light);
    margin-bottom: 10px;
`;

const SubTitle = styled.p`
    font-size: 22px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: var(--txt-light);
    margin-bottom: 40px;
`;

const StepsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const StepList = styled.div`
    flex: 1;
`;

const Step = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
`;

const StepNumber = styled.span`
    font-size: 32px;
    font-weight: 700;
    color: var(--ac-light);
`;

const StepText = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: var(--txt-light);
`;

const BulletImages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Waystra - AI Travel Planner</title>
            </Head>

            <Navbar />

            <Container>
                <Title>Waystra</Title>
                <SubTitle>Find your way quickly and easily with our AI-powered travel assistance.</SubTitle>

                <StepsContainer>
                    {/* Step List */}
                    <StepList>
                        <Step>
                            <StepNumber>1</StepNumber>
                            <StepText>
                                <b>Browse</b>
                                <br />• Search destinations
                            </StepText>
                        </Step>
                        <Step>
                            <StepNumber>2</StepNumber>
                            <StepText>
                                <b>Plan</b>
                                <br />• Plan your route
                            </StepText>
                        </Step>
                        <Step>
                            <StepNumber>3</StepNumber>
                            <StepText>
                                <b>Travel</b>
                                <br />• Travel with ease :)
                            </StepText>
                        </Step>
                    </StepList>

                    {/* Bullet Images */}
                    <BulletImages>
                        <ImageWrapper>
                            <Image src="/imgs/Number_1.avif" width={120} height={120} alt="Step 1" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image src="/imgs/Number_2.jpg" width={120} height={120} alt="Step 2" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <Image src="/imgs/Number_3.jpg" width={120} height={120} alt="Step 3" />
                        </ImageWrapper>
                    </BulletImages>
                </StepsContainer>
            </Container>
        </>
    );
}
