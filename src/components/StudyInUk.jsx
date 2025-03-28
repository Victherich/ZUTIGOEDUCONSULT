
import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaMoneyBillWave, FaHome, FaClock, FaBusinessTime, FaMapMarkedAlt, FaFlask, FaUniversity,FaUserGraduate, FaExchangeAlt, FaBriefcase, FaGlobe, FaBook, FaCameraRetro } from "react-icons/fa";
import heroImage from "../Images/uk4.jpg";
import gallery1 from "../Images/uk2.jpg";
import gallery2 from "../Images/uk3.jpg";
import gallery3 from "../Images/uk1.png";
import gallery4 from "../Images/sct2.jpg";
import gallery5 from "../Images/sct3.jpg";
import sct4 from '../Images/uk4.jpg'

const StudyInUk = () => {
  return (
    <PageContainer >
      {/* Hero Section */}
      <HeroSection >
        <HeroContent >
          <h1>STUDY AND WORK IN THE UK</h1>
         
          {/* <p>Canada is a very fantastic place to study, work and live in. The quality of life is very great and it’s ranked first in the world in terms of quality standard of living.</p> */}
    
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <h2 style={{color:"#ff6600"}}>STUDY AND WORK IN THE UK</h2>
        <p>The UK is one of the most popular countries to travel to, to earn an education. Generations of international students have come to the UK for their education, which means that British universities have decades of experience in working with international students.</p>
        <p>
        The United Kingdom (UK) is home to some of the world’s oldest universities and colleges having their roots in the 12th and 13th centuries. Coming from such a strong legacy, education in the UK has become a benchmark for other countries.
        </p>
        <p>
        Foreign students do not only get the chance to earn an excellent education, but they also find ways of enjoying their stay in the UK.
        </p>
        <img src={gallery2} alt="gallery2"/>
        <h2 style={{ color: "#444" }}>Reasons to Study in the UK</h2>
        <FeatureGrid>
  <FeatureCard>
    <FaBriefcase className="icon" />
    <h3>POST STUDY WORK PERMIT</h3>
    <p>As an international student, studying in the UK, you can start working after graduation.</p>
  </FeatureCard>

  <FeatureCard>
    <FaUniversity className="icon" />
    <h3>ACADEMIC EXCELLENCE</h3>
    <p>Universities in the UK have the best academic standards in the world. Four out of the top 10 universities in the world are from the UK.</p>
  </FeatureCard>

  <FeatureCard>
    <FaCheckCircle className="icon" />
    <h3>QUALITY EDUCATION</h3>
    <p>The Quality Assurance Agency (QAA) is an independent body in the UK that regularly assesses the education standards of all universities and colleges in the country so UK universities have high standards. This ensures they maintain excellent standards in learning, teaching, and research.</p>
  </FeatureCard>

  <FeatureCard>
    <FaClock className="icon" />
    <h3>SHORTER DURATION OF COURSES</h3>
    <p>While you can complete an undergraduate program in three years, you’ll be able to finish a graduate program in just one year.</p>
  </FeatureCard>

  <FeatureCard>
    <FaBusinessTime className="icon" />
    <h3>WORK WHILE YOU LEARN</h3>
    <p>You can work part-time for up to 20 hours a week during term time. You can even work full-time during your semester break. Students get a post-study work permit to work after graduation.</p>
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
    <FaCheckCircle className="icon" /> Copy of Secondary and Senior Secondary High School Results or Certificates | WAEC | NECO.
  </ProcedureItem>
  <ProcedureItem>
    <FaCheckCircle className="icon" /> Copy of Bachelor’s Degree Certificate and Mark Sheet | Transcripts (applicable only for postgraduate applicants e.g. MBA).
  </ProcedureItem>
  <ProcedureItem>
    <FaCheckCircle className="icon" /> Copy of Recent Resume (CV).
  </ProcedureItem>
</ProcedureList>


        <ProcessingFee>
          <FaMoneyBillWave className="icon" />
          <p><strong>Application | Visa Support fee: </strong> From ₦100,000</p>
        </ProcessingFee>
      </ProcedureSection>

      {/* Tuition Info */}
      <TuitionSection>
        <h2>Basic Information About Studying in United Kingdom</h2>
      <InfoGrid>
  <InfoCard>£2000 to £4,000 part payment of tuition deposit is expected to be paid to the university before visa application/traveling.</InfoCard>
  <InfoCard>Admission processing duration: 2 - 3 weeks.</InfoCard>
  <InfoCard>Undergraduate/Foundation tuition fee from: £13,000 to £20,000 & Masters tuition fee: from £12,000 to £18,000 per year.</InfoCard>
  <InfoCard>FAMILY: Partner (Wife or Husband) & child(ren) can travel with Masters (Graduate courses) applicants as Dependents.</InfoCard>
  <InfoCard>2 years post-graduate visa.</InfoCard>
  <InfoCard>Proof of funds services to our applicants at good rates.</InfoCard>
  <InfoCard>Regular Visa processing duration after submission/biometrics: 2-4 weeks (priority visa available too).</InfoCard>
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
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: url(${heroImage}) top/cover no-repeat;

   @media(max-width:884px){
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

export default StudyInUk;

