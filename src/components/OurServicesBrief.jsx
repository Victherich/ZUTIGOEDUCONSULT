import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaPassport, FaHome, FaMoneyBillWave } from "react-icons/fa"; 

const ServicesOverview = () => {
  return (
    <ServicesContainer>
      <Title>Our Services Overview</Title>
      <Subtitle>Explore our top-notch services designed to make your study abroad journey seamless.</Subtitle>

      <ServicesGrid>
        <ServiceCard href="#career-advisory">
          <IconWrapper>
            <FaGraduationCap />
          </IconWrapper>
          <h3>Career Advisory</h3>
          <p>Personalized guidance to help you choose the right academic and career path.</p>
        </ServiceCard>

        <ServiceCard href="#admission-processing">
          <IconWrapper>
            <FaPassport />
          </IconWrapper>
          <h3>Admission Processing</h3>
          <p>Expert support to ensure a hassle-free admission into top institutions worldwide.</p>
        </ServiceCard>

        <ServiceCard href="#accommodation">
          <IconWrapper>
            <FaHome />
          </IconWrapper>
          <h3>Accommodation</h3>
          <p>We assist in securing comfortable and affordable accommodation abroad.</p>
        </ServiceCard>

        <ServiceCard href="#budgeting">
          <IconWrapper>
            <FaMoneyBillWave />
          </IconWrapper>
          <h3>Budgeting</h3>
          <p>Smart financial planning to help you manage your expenses while studying abroad.</p>
        </ServiceCard>
      </ServicesGrid>
    </ServicesContainer>
  );
};

// Styled Components
const ServicesContainer = styled.section`
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding: 80px 10%;
  text-align: center;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: auto;
`;

const ServiceCard = styled.a`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 15px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-top: 10px;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #ff6600;
`;

export default ServicesOverview;
