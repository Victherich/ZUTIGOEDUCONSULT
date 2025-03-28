
import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaMoneyBillWave, FaUniversity, FaBriefcase, FaGlobe, FaBook, FaCameraRetro } from "react-icons/fa";
import heroImage from "../Images/sct1.jpg";
import gallery1 from "../Images/sct2.jpg";
import gallery2 from "../Images/sct3.jpg";
import gallery3 from "../Images/sct1.jpg";
import gallery4 from "../Images/sct2.jpg";
import gallery5 from "../Images/sct3.jpg";
import sct4 from '../Images/2336.jpg'

const StudyInScotland = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>STUDY AND WORK IN SCOTLAND</h1>
          <p>Scotland is home to world-class universities and provides great employment prospects.</p>
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <h2 style={{color:"#ff6600"}}>STUDY AND WORK IN SCOTLAND</h2>
        <p>Scotland is a great place to study. It is home to more world class universities per head of population than just about anywhere else in the world.</p>
        <p>Scotland has a reputation for producing creative thinkers. Studying in Scotland also provides great prospects for employment because employers value Scottish education greatly.</p>
        <p>
        Scotland also has some of the world’s oldest and most prestigious as well as the finest modern institutions.
        </p>
        <img src={gallery2} alt="gallery2"/>
        <h2 style={{ color: "#444" }}>Reasons to Study in Scotland</h2>
        <FeatureGrid>
          <FeatureCard>
            <FaUniversity className="icon" />
            <h3>Quality of Education</h3>
            <p>The quality of education is very great. Studying in Scotland allows you to be part of world-renowned researchers.</p>
          </FeatureCard>

          <FeatureCard>
            <FaBriefcase className="icon" />
            <h3>The Universities' Focus on Employability</h3>
            <p>Studying in Scotland provides great prospects for employment because employers value Scottish education greatly.</p>
          </FeatureCard>

          <FeatureCard>
            <FaGlobe className="icon" />
            <h3>Rich Cultural Environment</h3>
            <p>Scotland has over 250 museums and 100 galleries, making it a culturally vibrant place to study.</p>
          </FeatureCard>

          <FeatureCard>
            <FaBriefcase className="icon" />
            <h3>Work While You Learn</h3>
            <p>You can work part-time while for up to 20 hours a week while school is on and even work full-time during semester breaks.</p>
          </FeatureCard>

          <FeatureCard>
            <FaBook className="icon" />
            <h3>The Flexibility of Programs</h3>
            <p>The standard 4-year Scottish degree structure allows for 2 years of broad-based study followed by 2 years in which to specialize. This flexibility allows many international students studying abroad in Scotland to tailor their degrees to suit their interests.</p>
          </FeatureCard>

          <FeatureCard>
            <FaMoneyBillWave className="icon" />
            <h3>Cost of Living</h3>
            <p>In comparison to other universities, the cost of living in Scotland and the tuition is quite affordable.</p>
          </FeatureCard>
        </FeatureGrid>
      </AboutSection>

      {/* Application Procedures */}
      <ProcedureSection>
        <h2>Application Procedures</h2>
        <p>REQUIRED DOCUMENTS</p>
        <ProcedureList>
          <ProcedureItem><FaCheckCircle className="icon" /> Copy of Passport (only pages showing photo, details, and signature).</ProcedureItem>
          <ProcedureItem><FaCheckCircle className="icon" /> Copy of Secondary and Senior Secondary High School Results | WAEC | NECO.</ProcedureItem>
          <ProcedureItem><FaCheckCircle className="icon" /> Copy of Bachelor’s Degree Certificate and Mark Sheet | Transcripts (applicable only for postgraduate applicants e.g. MBA).</ProcedureItem>
          <ProcedureItem><FaCheckCircle className="icon" /> Copy of Recent Passport Photograph.</ProcedureItem>
        </ProcedureList>
        <ProcessingFee>
          <FaMoneyBillWave className="icon" />
          <p><strong>Application | Processing Fee | Service Charge:</strong> ₦100,000</p>
        </ProcessingFee>
      </ProcedureSection>

      {/* Tuition Info */}
      <TuitionSection>
        <h2>Basic Information About Studying in Scotland</h2>
        <InfoGrid>
          <InfoCard>£2,000 to £4,000 part payment of tuition deposit is expected before visa application/traveling.</InfoCard>
          <InfoCard>Admission processing duration: 2 - 3 weeks.</InfoCard>
          <InfoCard>Undergraduate tuition: £13,000 - £20,000 /year. Masters tuition: £12,000 - £18,000 /year.</InfoCard>
          <InfoCard>FAMILY: Partner ( Wife or Husband) & child(ren) can travel with Masters( Graduate courses) applicants as Dependent
5.	2 years post graduate visa
</InfoCard>
          <InfoCard>2-year post-graduate visa available.</InfoCard>
          <InfoCard>Proof of funds services provided at good rates.</InfoCard>
          <InfoCard>Regular Visa processing duration after submission/biometrics: 2-4 weeks ( priority visa available too)</InfoCard>
        </InfoGrid>
      </TuitionSection>

      {/* Gallery */}
      <GallerySection>
        <h2>Explore Life in Scotland</h2>
        <GalleryGrid>
          <img src={gallery1} alt="Scotland University" />
          <img src={gallery2} alt="Students in Scotland" />
          <img src={gallery3} alt="Scotland Landscape" />
          {/* <img src={gallery4} alt="University in Scotland" /> */}
          {/* <img src={gallery5} alt="Scottish Student Life" /> */}
        </GalleryGrid>
      </GallerySection>
    </PageContainer>
  );
};

// Styled Components

const PageContainer = styled.div`
  color: #333;
`;

// Hero Section
const HeroSection = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: url(${heroImage}) center/cover no-repeat;
`;

const HeroContent = styled.div`
background:rgba(0,0,0,0.5);
padding:20px;
border-radius:10px;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.2rem;
  }

  @media(max-width:428px){
  h1{
  font-size:2.4rem;
  }
  }
`;

// About Section
const AboutSection = styled.div`
  padding: 50px;
  text-align: center;
  background: #f9f9f9;

  
  p{
    margin-bottom:10px;

  }

  h2{
  margin-top:10px;
  font-size:2rem;
  }

  

   @media(max-width:884px){
    padding:0px;
    padding:50px 10px;

    img{
    display:none;
    }
  } 
`;

const FeatureGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding:50px 5px;
  background-image:url(${sct4});
   background-size:cover;
`;

const FeatureCard = styled.div`
  background: rgba(255,255,255,0.9);
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  .icon {
    font-size: 40px;
    color: #ff7f50;
  }
`;

// Application Procedures
const ProcedureSection = styled.div`
  padding: 50px;
  background: #eaf4fc;

  @media(max-width:884px){
    padding:0;
    padding:50px 10px
;  }
`;

const ProcedureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProcedureItem = styled.li`
  font-size: 1.2rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 10px;
    color: #ff7f50;
  }
`;

const ProcessingFee = styled.div`
  margin-top: 50px;
  .icon {
    font-size: 30px;
    color: #ff7f50;
  }
`;

// Tuition Info
const TuitionSection = styled.div`
  padding: 50px;
  background: #f9f9f9;
  text-align: center;

    @media(max-width:768px){
      padding:0px;
      padding:50px 10px;
  }
`;

const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const InfoCard = styled.div`
  background: white;
  padding: 15px;
  width: 250px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

// Gallery
const GallerySection = styled.div`
  padding: 50px;
  text-align: center;

   @media(max-width:768px){
    padding:0px;
    padding:50px 10px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
    @media(max-width:428px){
   grid-template-columns: repeat(1, 1fr);
  }
`;

export default StudyInScotland;

