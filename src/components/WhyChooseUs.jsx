import React from "react";
import styled from "styled-components";
import { FaStar, FaUserGraduate, FaGlobe, FaHandsHelping, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <WhyContainer>
      <Title>Why Choose Us?</Title>
      <Subtitle>We offer unmatched guidance and support to make your study abroad journey seamless.</Subtitle>

      <CardsContainer>
        <Card>
          <IconWrapper><FaStar /></IconWrapper>
          <h3>Expert Guidance</h3>
          <p>Our experienced consultants provide top-tier academic advice tailored to your needs.</p>
        </Card>

        <Card>
          <IconWrapper><FaUserGraduate /></IconWrapper>
          <h3>High Success Rate</h3>
          <p>We have helped hundreds of students secure admissions into prestigious universities.</p>
        </Card>

        <Card>
          <IconWrapper><FaGlobe /></IconWrapper>
          <h3>Global Network</h3>
          <p>Our extensive university partnerships open doors to international study opportunities.</p>
        </Card>

        <Card>
          <IconWrapper><FaHandsHelping /></IconWrapper>
          <h3>Personalized Support</h3>
          <p>We provide step-by-step assistance throughout your entire application process.</p>
        </Card>

        <Card>
          <IconWrapper><FaShieldAlt /></IconWrapper>
          <h3>Reliable & Transparent</h3>
          <p>We are committed to honesty, integrity, and delivering the best results for our students.</p>
        </Card>
      </CardsContainer>
    </WhyContainer>
  );
};

// Styled Components
const WhyContainer = styled.section`
  background: #ffffff;
  padding: 80px 10%;
  text-align: center;

  @media(max-width:428px){
    padding :80px 3%;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 50px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #f8f9fa;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    background: #ff6600;
    color: #fff;

    p {
      color: #fff;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin: 15px 0;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

 
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #ff6600;

  &:hoer
`;

export default WhyChooseUs;
