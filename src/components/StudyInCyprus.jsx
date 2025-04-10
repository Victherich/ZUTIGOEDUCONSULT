import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaMoneyBillWave, FaShieldAlt, FaUniversity, FaClipboardList, FaUserMd } from "react-icons/fa";
// import studyVideo from "../Videos/cyprus.mp4";
import gallery1 from "../Images/cp1.jpg";
import gallery2 from "../Images/cp2.jpg";
import gallery3 from "../Images/cp3.jpg";
import gallery4 from "../Images/cp4.jpg";
import gallery5 from "../Images/6007.jpg";
import heroimg from '../Images/ch.jpg'

const StudyInCyprus = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        {/* <VideoBackground autoPlay loop muted>
          <source src={studyVideo} type="video/mp4" />
        </VideoBackground> */}
        <HeroContent>
          <h1>Study in North Cyprus</h1>
          <p>Quality education at affordable tuition fees in a safe and friendly environment.</p>
          {/* <HeroButton>Apply Now</HeroButton> */}
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <h2>STUDY IN NORTH CYPRUS</h2>
        <p>North Cyprus is known to be one of the world’s destinations that offers international students the opportunity to gain a degree at very affordable tuition fees.</p>
        <p>
        Universities in North Cyprus are known for quality education at international standards and are delivered in English. International students have the opportunity to enjoy qualified faculty members at international standards.
        </p>
        <p>
        English is widely used in North Cyprus and you can survive without having to learn Turkish, but all universities offer free Turkish lessons. Tuition fees are affordable and living expenses are moderate, especially in comparison to most of Europe. Tuition fees are dependent upon courses and the respective university.
        </p>

        <h2 style={{color:"#444"}}>Why Study in North Cyprus?</h2>
        <FeatureGrid>
        
          <FeatureCard>
            <FaMoneyBillWave className="icon" />
            <h3>Affordable Tuition Fees</h3>
            <p>Compared to universities in other countries, North Cyprus tuition fees are very affordable. They offer international students the opportunity to gain a degree at very affordable tuition fee.</p>
          </FeatureCard>
          <FeatureCard>
            <FaUniversity className="icon" />
            <h3>Quality Education</h3>
            <p>The quality of education in North Cyprus is very great. It emphasizes academic development, making sure that the appropriate and effective teaching, support, assessment and learning opportunities are provided for the students.</p>
          </FeatureCard>
          <FeatureCard>
            <FaShieldAlt className="icon" />
            <h3>Safe & Secure</h3>
            <p>North Cyprus is a very safe and friendly place to live in. It is ranked the number 1 country with lowest crime rate. You can be rest assured that you’re in one of the safest countries while studying.</p>
          </FeatureCard>

          <FeatureCard>
            <FaMoneyBillWave className="icon" />
            <h3>Reasonable Cost of Living</h3>
            <p>
                The cost of living in North Cyprus is very low and affordable for international students compared to other countries. The cost of accommodation is also very low.
            </p>
          </FeatureCard>

          <FeatureCard>
            <FaUserMd className="icon" />
            <h3>Health  Insurance</h3>
            <p>
            As an international student studying in North Cyprus, you don’t have to keep worrying about medical bills. Every student has health insurance that covers their essential medical charges. Insurance is paid along with the residence permit.     </p>
          </FeatureCard>
        </FeatureGrid>
      </AboutSection>

      {/* Application Procedures */}
      <ProcedureSection>
        {/* <img src={gallery3} alt="cp3"/> */}
        <h2>Application Procedures</h2>
        <p>REQUIRED DOCUMENTS</p>
        <ProcedureList>
          <ProcedureItem><FaCheckCircle style={{color:"#ff7f50", marginRight:"10px"}}/> 	Copy of Passport (only the page(s) that shows your photo, personal details and signature)</ProcedureItem>
          <ProcedureItem><FaCheckCircle style={{color:"#ff7f50", marginRight:"10px"}}/> 	Copy of Secondary and Senior Secondary High School Result or Certificates | WAEC | NECO</ProcedureItem>
          <ProcedureItem><FaCheckCircle style={{color:"#ff7f50", marginRight:"10px"}}/> 	Copy of Bachelor Degree Certificate and Mark Sheet | Transcripts (applicable only for postgraduate applicants e.g. MBA).</ProcedureItem>
          <ProcedureItem><FaCheckCircle style={{color:"#ff7f50", marginRight:"10px"}}/> 	Copy of Recent Passport Photograph</ProcedureItem>
        </ProcedureList>
        <ProcessingFee>
          <FaClipboardList className="icon" />
          <p><strong>Application | Processing Fee | Service Charge:</strong> ₦250,000</p>
        </ProcessingFee>
      </ProcedureSection>

      {/* Tuition Info */}
      <TuitionSection>
        <h2>Basic Information About Studying in Cyprus</h2>
        <InfoGrid>
          <InfoCard>Tuition Fee from €3000/year for Undergraduate courses and €2000 For Masters Degree ( Graduate ) courses.</InfoCard>
          <InfoCard>Schools in North Cyprus require SCHOOL FEES DEPOSIT OF €1000 before traveling.</InfoCard>
          <InfoCard>Admission Processing Duration: 2 - 7 Working days.</InfoCard>
          <InfoCard>January | February | September intakes available.</InfoCard>
          <InfoCard>NO much jobs in North Cyprus, This Destination is mostly for just STUDY.</InfoCard>
          <InfoCard>Hostel Accommodation from €1200/year.</InfoCard>
        </InfoGrid>
      </TuitionSection>

      {/* Gallery */}
      <GallerySection>
        <h2>Explore Life in North Cyprus</h2>
        <GalleryGrid>
          <img src={gallery1} alt="Cyprus View" />
          <img src={gallery2} alt="University" />
          <img src={gallery3} alt="Student Life" />
          <img src={gallery4} alt="City" />
          {/* <img src={gallery5} alt="Campus" /> */}
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
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
  background-image:url(${heroimg});
  background-position:center;
  background-size:cover;

  @media(max-width:768px){
    // background-position:left;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
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

const HeroButton = styled.button`
  background: #ff7f50;
  padding: 12px 25px;
  color: white;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #e76a3c;
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

  h2{
    color : #ff6600;
    font-size:2.3rem;


  }

  p{
    margin-bottom:20px;
  }
`;

const FeatureGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top:20px;
  background-image:url(${gallery5});
  padding:50px 5px;
   background-size:cover;
`;

const FeatureCard = styled.div`
  background: rgba(255,255,255,0.9);
  padding: 20px;
  width: 300px;
//   text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  .icon {
    font-size: 40px;
    color: #ff7f50;
  }
`;

// Application Procedures
const ProcedureSection = styled.div`
  padding: 100px;
//   text-align: center;
  background: #eaf4fc;

  @media(max-width:884px){
    padding:0;
    padding:50px 10px
;  }
img{
    width:200px;
}

`;

const ProcedureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align:left;
`;

const ProcedureItem = styled.li`
  font-size: 1.2rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
  text-align:left;
//   justify-content: center;
  .icon {
    margin-right: 10px;
    color: #ff7f50;
  }
`;

const ProcessingFee = styled.div`
  font-size: 1.2rem;
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
  gap: 20px;
  flex-wrap: wrap;
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

export default StudyInCyprus;
