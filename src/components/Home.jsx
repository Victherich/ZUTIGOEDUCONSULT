import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import OurProcess from "./OurProcess";
import FloatingQuotes from "./FloatingQuotes";
import { useNavigate } from "react-router-dom";
import OurProcess2 from "./OurProcess2";

const Home = () => {
      const navigate = useNavigate()
  return (
    <Wrapper>
      <HeroSection>
        <h1>COMMITMENT TO EXCELLENCE</h1>
        <p>At Zutigo EduConsult, we are dedicated to upholding the highest standards of professionalism, integrity, and customer service. We strive to exceed your expectations in every interaction, providing you with transparent communication, timely assistance, and unparalleled support throughout your engagement with us.</p>
        <p>We are your Trusted Partner for Studying Abroad.</p>
        <button onClick={()=>navigate('/contactus')}>Get Started</button>
      </HeroSection>
      <FloatingQuotes/>
{/* 
      <AboutSection>
        <h2>About Zutigo EduConsult</h2>
        <p>We provide expert guidance for students seeking education abroad.</p>
      </AboutSection> */}
      {/* <OurProcess/> */}
      <OurProcess2/>

      {/* <ServicesSection>
        <h2>Our Services</h2>
        <ServiceList>
          <ServiceCard>
            <h3>Career Advisory</h3>
            <p>Personalized guidance for your future career.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Admission Processing</h3>
            <p>We streamline your admission journey.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Visa Assistance</h3>
            <p>Expert visa counseling services.</p>
          </ServiceCard>
        </ServiceList>
      </ServicesSection> */}

      {/* <ProcessSection>
        <h2>Our Process</h2>
        <Step>
          <FaCheckCircle />
          <span>Submit Your Documents</span>
        </Step>
        <Step>
          <FaCheckCircle />
          <span>Accept an Admission Offer</span>
        </Step>
        <Step>
          <FaCheckCircle />
          <span>Make Payment for Your Fees</span>
        </Step>
        <Step>
          <FaCheckCircle />
          <span>Start Your Visa Application</span>
        </Step>
        <Step>
          <FaCheckCircle />
          <span>Arrive at Your University</span>
        </Step>
      </ProcessSection> */}

      {/* <WhyChooseUsSection>
        <h2>Why Choose Us?</h2>
        <p>We have a proven track record of helping students succeed abroad.</p>
      </WhyChooseUsSection> */}

      {/* <TestimonialsSection>
        <h2>Success Stories</h2>
        <blockquote>
          "Zutigo EduConsult helped me achieve my dream of studying abroad!"
        </blockquote>
        <cite>- A Satisfied Student</cite>
      </TestimonialsSection> */}

      {/* <ContactSection>
        <h2>Contact Us</h2>
        <ContactItem>
          <FaMapMarkerAlt />
          <span>Abuja | Lagos | Port Harcourt</span>
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt />
          <span>+2348174211261 | +2349014444327</span>
        </ContactItem>
      </ContactSection> */}
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  font-family: "Arial", sans-serif;
  color: #333;
  text-align: center;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(0,0,255,0.7), rgba(0,0,255,0.1));
  color: white;
  padding: 100px 20px;
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.2rem;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1.2rem;
    background: white;
    color: #004aad;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
      background: #ffcc00;
      color: #004aad;
    }
  }
`;

const AboutSection = styled.section`
  padding: 50px 20px;
  background: #f9f9f9;
  h2 {
    color: #004aad;
  }
  p {
    font-size: 1.2rem;
  }
`;

const ServicesSection = styled.section`
  padding: 50px 20px;
  h2 {
    color: #004aad;
  }
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  width: 200px;
  h3 {
    color: #004aad;
  }
  p {
    font-size: 1rem;
  }
`;

const ProcessSection = styled.section`
  padding: 50px 20px;
  background: #f1f1f1;
  h2 {
    color: #004aad;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
  font-size: 1.2rem;
  svg {
    color: #00a8e8;
  }
`;

const WhyChooseUsSection = styled.section`
  padding: 50px 20px;
  background: #ffffff;
  h2 {
    color: #004aad;
  }
  p {
    font-size: 1.2rem;
  }
`;

const TestimonialsSection = styled.section`
  padding: 50px 20px;
  background: #f9f9f9;
  h2 {
    color: #004aad;
  }
  blockquote {
    font-style: italic;
    font-size: 1.2rem;
    margin-top: 10px;
  }
  cite {
    font-weight: bold;
    display: block;
    margin-top: 5px;
  }
`;

const ContactSection = styled.section`
  padding: 50px 20px;
  background: #004aad;
  color: white;
  h2 {
    color: #ffcc00;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
  font-size: 1.2rem;
`;

export default Home;
