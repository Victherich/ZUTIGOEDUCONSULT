import React from "react";
import styled from "styled-components";
import aboutImage from "../Images/im2.jpg"; // Import an eye-catching image
import { useNavigate } from "react-router-dom";


const AboutBrief = () => {
    const navigate = useNavigate()
  return (
    <AboutContainer>
      <ContentWrapper>
        {/* Left Side - Image */}
        <ImageWrapper>
          <img src={aboutImage} alt="About Zutigo EduConsult" />
        </ImageWrapper>

        {/* Right Side - Text Content */}
        <TextContent>
          <h2>About Zutigo EduConsult</h2>
          <p>
          At Zutigo EduConsult, we specialize in providing expert guidance and support to students seeking to pursue their education abroad. With years of professional experience in student placement and visa counseling services, we have successfully represented and placed students in A-Level, Foundation, Undergraduate, Postgraduate, and PhD degree programs at top-ranked institutions worldwide.
          </p>
          <p>
            Our mission is to provide **expert counseling, seamless admission
            processing, and visa support** to students worldwide.
          </p>
          <StyledButton onClick={()=>navigate('/aboutus')}>Learn More</StyledButton>
        </TextContent>
      </ContentWrapper>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.section`
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding: 80px 10%;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1100px;
  gap: 50px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 15px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const TextContent = styled.div`
  flex: 1;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 12px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: #ff6600;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  cursor:pointer;

  &:hover {
    background: #e65c00;
    transform: scale(1.05);
  }
`;

export default AboutBrief;
