
import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaMoneyBillWave, FaHome, FaMapMarkedAlt, FaFlask, FaUniversity,FaUserGraduate, FaExchangeAlt, FaBriefcase, FaGlobe, FaBook, FaCameraRetro } from "react-icons/fa";
import heroImage from "../Images/cd2.png";
import gallery1 from "../Images/cd2.png";
import gallery2 from "../Images/cd3.jpg";
import gallery3 from "../Images/cd1.jpg";
import gallery4 from "../Images/sct2.jpg";
import gallery5 from "../Images/sct3.jpg";
import sct4 from '../Images/6965.jpg'

const StudyInCanada = () => {
  return (
    <PageContainer >
      {/* Hero Section */}
      <HeroSection >
        <HeroContent >
          {/* <h1>STUDY AND WORK IN CANADA</h1> */}
         
          {/* <p>Canada is a very fantastic place to study, work and live in. The quality of life is very great and it’s ranked first in the world in terms of quality standard of living.</p> */}
    
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <h2 style={{color:"#ff6600"}}>STUDY AND WORK IN CANADA</h2>
        <p>Canada is a very fantastic place to study, work and live in. The quality of life is very great and it’s ranked first in the world in terms of quality standard of living.</p>
        <p>
        International students enjoy the same privileges as Canadians. This allows international students have a high level of living in the country. Canada is also among the top best student cities in the world and this fact further attracts students.
        </p>
        <img src={gallery2} alt="gallery2"/>
        <h2 style={{ color: "#444" }}>Reasons to Study in Canada</h2>
        <FeatureGrid>
  <FeatureCard>
    <FaBriefcase className="icon" />
    <h3>OPPORTUNITY TO WORK WHILE YOU STUDY</h3>
    <p>International students are allowed to work 20 hours per week during the semester. Students can also work on campus or as interns in any company.</p>
  </FeatureCard>

  <FeatureCard>
    <FaUniversity className="icon" />
    <h3>EXCELLENT EDUCATIONAL SYSTEM</h3>
    <p>Canada’s excellent educational system and its great level of education are one of its most attractive features and important reasons why students choose to study in Canada. The degree is highly recognized and respected as it stands as a symbol of trust and excellence.</p>
  </FeatureCard>

  <FeatureCard>
    <FaHome className="icon" />
    <h3>STANDARD OF LIVING</h3>
    <p>International students enjoy a very high standard of living while studying in Canada. You enjoy great student health benefits and other services put in place for international students. Students don’t have to worry about their safety also because Canada has low crime rates.</p>
  </FeatureCard>

  <FeatureCard>
    <FaMapMarkedAlt className="icon" />
    <h3>EXPLORATION OPTIONS</h3>
    <p>As the saying goes, all work and no play makes Jack a dull boy. International students get to explore Canada while studying in the country. There are lots of fun activities outside campus. You can spend time being active outdoors and even explore nature.</p>
  </FeatureCard>

  <FeatureCard>
    <FaFlask className="icon" />
    <h3>RESEARCH & INNOVATION</h3>
    <p>Most of the Canadian universities’ study programs focus a lot on research and students get to engage in intriguing projects and experiments. These projects and experiments are meant to provide students with a complete study experience based on forward-thinking and innovation.</p>
  </FeatureCard>
</FeatureGrid>

      </AboutSection>

      {/* Application Procedures */}
      <ProcedureSection>
        <h2>Application Procedures</h2>
        <p>REQUIRED DOCUMENTS</p>
        <ProcedureList>
  <ProcedureItem>
    <FaCheckCircle className="icon" /> Copy of Passport (only the page(s) that shows your photo, personal details, and signature).
  </ProcedureItem>
  <ProcedureItem>
    <FaCheckCircle className="icon" /> Copy of Secondary and Senior Secondary High School Result or Certificates | WAEC | NECO.
  </ProcedureItem>
  <ProcedureItem>
    <FaCheckCircle className="icon" /> Copy of Bachelor Degree Certificate and Mark Sheet | Transcripts (applicable only for postgraduate applicants e.g. MBA).
  </ProcedureItem>
  <ProcedureItem>
    <FaCheckCircle className="icon" /> Copy of Recent Resume (CV).
  </ProcedureItem>
</ProcedureList>

        <ProcessingFee>
          <FaMoneyBillWave className="icon" />
          <p><strong>Application | Processing Fee | Service Charge:</strong> ₦250,000</p>
        </ProcessingFee>
      </ProcedureSection>

      {/* Tuition Info */}
      <TuitionSection>
        <h2>Basic Information About Studying in Canada</h2>
        <InfoGrid>
  <InfoCard>Most schools require part payment of Tuition Fees (CAD$ 2500 to CAD$ 7000) to be paid before visa application/before arrival in Canada.</InfoCard>
  <InfoCard>Admission processing duration: 2 - 6 weeks.</InfoCard>
  <InfoCard>Visa Application processing duration: 2 - 4 months after biometrics.</InfoCard>
  <InfoCard>Universities Tuition fee estimate: CAD$ 15,000 - CAD$ 23,000 per year.</InfoCard>
  <InfoCard>Colleges Tuition fee estimate: CAD$ 10,000 to CAD$ 18,000 per year.</InfoCard>
</InfoGrid>

      </TuitionSection>


      {/* Gallery */}
      <GallerySection>
        <h2>Explore Life in Canada</h2>
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
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: url(${heroImage}) top/cover no-repeat;

  @media(max-width:768px){
    background-position:left;
  }

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
`;

// About Section
const AboutSection = styled.div`
  padding: 50px;
  text-align: center;
  background: #f9f9f9;

   @media(max-width:884px){
    padding:0px;
    padding:50px 10px;
  }
  p{
    margin-bottom:10px;

  }

  h2{
  margin-top:10px;
  font-size:2rem;
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
  background: rgba(255,255,255,0.8);
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


const TableContainer = styled.div`
  text-align: center;
  margin: 50px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-collapse: collapse;
  font-size: 1.2rem;
`;

const TableRow = styled.tr`
  background: white;
  border-bottom: 2px solid #ddd;
`;

const TableData = styled.td`
  padding: 15px;
  text-align: center;
  font-weight: bold;
  color: #333;
`;

export default StudyInCanada;

