import React from "react";
import styled from "styled-components";
import { FaUserGraduate, FaUniversity, FaGlobe, FaHandshake } from "react-icons/fa";
import aboutImage from "../Images/im15.jpg"; // Hero Section Image
import missionImage from "../Images/im18.png"; // Mission Section Image
import founderImage from "../Images/im1.jpeg"; // Founder Image
import counselingImage from "../Images/im21.jpg"; // Counseling Services Image

const AboutUs = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>Empowering Your Future with International Education</h1>
          <p>Guiding students toward academic success with personalized counseling and expert support.</p>
        </HeroContent>
      </HeroSection>

      {/* About Us Section */}
      <AboutSection>
        <Content>
          <h2>About Zutigo Educonsult Limited</h2>
          <p>
          Founded in April 2021 by the seasoned educationist, Dr. Tachio Anthonia Isodor, Zutigo Educonsult Limited is committed to guiding students toward a successful future through international education. With nearly two decades of experience in the educational sector, Dr. Isodor’s expertise and passion drive the mission of the company to empower students in making informed decisions about their educational journey.</p>
          <p>
          Zutigo Educonsult specializes in providing personalized counseling to students, offering guidance on their academic options, and assisting with enrollment in institutions of their choice. Acting as a trusted liaison between students and higher education institutions, we ensure that every student receives tailored support to meet their unique needs and aspirations.</p>
        </Content>
        <ImageContainer>
          <img src={founderImage} alt="Dr. Tachio Anthonia Isodor - Founder" />
        </ImageContainer>
      </AboutSection>

      {/* Our Mission */}
      <MissionSection>
        <ImageContainer>
          <img src={missionImage} alt="Our Mission" />
        </ImageContainer>
        <Content>
          <h2>Our Mission</h2>
          <p>
          Our core mission is to exceed client expectations through exceptional customer service, unmatched flexibility, and remarkable value. At Zutigo Educonsult, we strive to optimize learning opportunities, enhance academic efficiency, and foster long-term success for each student we serve.
          </p>
        </Content>
      </MissionSection>

      {/* Our Services */}
      <ServicesSection>
        <h2>What We Do</h2>
        <ServicesGrid>
          <ServiceCard>
            <FaUserGraduate />
            <h3>Personalized Counseling</h3>
            <p>Guidance on academic options and selecting the right institutions for your career goals.</p>
          </ServiceCard>

          <ServiceCard>
            <FaUniversity />
            <h3>University Enrollment</h3>
            <p>We assist with enrollment in institutions of your choice, ensuring a seamless process.</p>
          </ServiceCard>

          <ServiceCard>
            <FaGlobe />
            <h3>International Education</h3>
            <p>Connecting students with global opportunities for higher learning and career success.</p>
          </ServiceCard>

          <ServiceCard>
            <FaHandshake />
            <h3>Dedicated Support</h3>
            <p>Ensuring every student receives tailored support to meet their unique needs and aspirations.</p>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* Call to Action */}
      <CTASection>
        <h2>Unlock Your Potential with Zutigo Educonsult</h2>
        <p>
        Whether you’re seeking guidance on choosing the right institution or need help navigating the enrollment process, we are here to provide the support and expertise you need to achieve your academic goals. With Dr. Tachio Isodor's dedication and the team's commitment, we continue to create pathways for students to thrive in their educational endeavors.
        </p>
        <p>Let us help you unlock your potential and take the first step toward your brighter future with Zutigo Educonsult Limited.</p>
        <a href="/contactus">Get Started</a>
      </CTASection>
    </Container>
  );
};

// Styled Components
const Container = styled.div`

`;

const HeroSection = styled.section`
  background: url(${aboutImage}) center/cover no-repeat;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 20px;
  position: relative;

  @media(max-width:428px){
  padding:0px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); /* Subtle shadow effect */
}

p {
    font-size: 1.2rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9); /* Softer shadow for readability */
}

`;

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  padding: 60px 10%;
  gap: 40px;
  background: #f8f8f8;



  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    color: #ff6600;
  }

  p {
    font-size: 1.1rem;
    margin-top: 10px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const MissionSection = styled(AboutSection)`
  flex-direction: row-reverse;

  @media(max-width:768px){
    flex-direction:column;
  }
`;

const ServicesSection = styled.section`
  text-align: center;
  padding: 80px 10%;

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
    color: #ff6600;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: #ff6600;
  }

  h3 {
    margin-top: 15px;
    font-size: 1.5rem;
  }

  p {
    margin-top: 10px;
  }
`;

const CTASection = styled.section`
  text-align: center;
  padding: 60px 10%;
  background: #ff6600;
  color: white;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  a {
    display: inline-block;
    padding: 12px 25px;
    background: white;
    color: #ff6600;
    font-size: 1.1rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: #e0e0e0;
    }
  }
`;

export default AboutUs;
