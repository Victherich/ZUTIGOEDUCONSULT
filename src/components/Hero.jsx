import React from "react";
import styled from "styled-components";
import heroBackground from "../Images/im35.jpg"; // Import your background image
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();
    
  return (
    <HeroContainer>
      <HeroOverlay>
        <HeroContent>
          <h1>Unlock Global Education Opportunities</h1>
          <p>
            At Zutigo EduConsult, we guide you in choosing the right path for
            your academic and career success abroad.
          </p>
          <HeroButton onClick={()=>navigate('/contactus')}>Get Started</HeroButton>
        </HeroContent>
      </HeroOverlay>

      {/* Sine Wave Bottom */}
      <WaveContainer>
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </WaveContainer>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.section`
  background: url(${heroBackground}) no-repeat center center/cover;
  color: white;
  text-align: center;
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 800px;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 15px 35px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background: #ffcc00;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  cursor:pointer;

  &:hover {
    background: #ffaa00;
    transform: scale(1.05);
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: 100%;
    height: 120px;
  }
`;

export default Hero;
