
import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaMoneyBillWave, FaLanguage, FaLandmark, FaUsers, FaFont, FaFeatherAlt, FaHandshake, FaMapMarkerAlt, FaHome, FaClock, FaBusinessTime, FaMapMarkedAlt, FaFlask, FaUniversity,FaUserGraduate, FaExchangeAlt, FaBriefcase, FaGlobe, FaBook, FaCameraRetro } from "react-icons/fa";
import heroImage from "../Images/gg4.jpg";
import gallery1 from "../Images/gg2.jpg";
import gallery2 from "../Images/gg3.jpg";
import gallery3 from "../Images/gg1.png";
import gallery4 from "../Images/sct2.jpg";
import gallery5 from "../Images/sct3.jpg";
import sct4 from '../Images/gg4.jpg'
import StudyInGeorgiaExtension from "./StudyInGeorgiaExtension";

const StudyInGeorgia = () => {
  return (
    <PageContainer >
      {/* Hero Section */}
      <HeroSection >
        <HeroContent >
          <h1>STUDY AND WORK IN GEORGIA</h1>
         
          {/* <p>Canada is a very fantastic place to study, work and live in. The quality of life is very great and it’s ranked first in the world in terms of quality standard of living.</p> */}
    
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <h2 style={{color:"#ff6600"}}>STUDY AND WORK IN GEORGIA</h2>
        <p>Georgia has been a full member of the Bologna Process / European Higher Education Area since 2005. Georgia is an Associated Country to the EU Framework Program for Research and Innovation – Horizon Europe, for the second consecutive period. Georgia is a full-fledge member to the European Cooperation for Science and Technology – COST Association. National Center for Education Quality Enhancement (NCEQE) has the membership to International and European higher education quality assurance agencies and recognition networks, such as:  WFME, ENQA, EQAR, ENIC-NARIC networks, and CEENQA;</p>
       
        <img src={gallery2} alt="gallery2"/>
        <h2 style={{ color: "#444" }}>Reasons to Study in the Georgia</h2>
        <FeatureGrid>
  <FeatureCard>
    <FaGlobe className="icon" />
    <h3>CROSSROADS OF EUROPE & ASIA</h3>
    <p>Georgia is located at the crossroads of Europe and Asia, in the Caucasus region.</p>
  </FeatureCard>

  <FeatureCard>
    <FaLanguage className="icon" />
    <h3>RICH LANGUAGE HISTORY</h3>
    <p>Georgian is a well-developed and rich language with a centuries-long history.</p>
  </FeatureCard>

  <FeatureCard>
    <FaFont className="icon" />
    <h3>ANCIENT ALPHABET</h3>
    <p>The Georgian alphabet is one of the most perfect and oldest alphabets in the world.</p>
  </FeatureCard>

  <FeatureCard>
    <FaBook className="icon" />
    <h3>LITERARY HERITAGE</h3>
    <p>Georgian literary works are considered to be one of the most important in world literature.</p>
  </FeatureCard>

  <FeatureCard>
    <FaLandmark className="icon" />
    <h3>BIBLICAL CONNECTIONS</h3>
    <p>Among the biblical books translated into Georgian, the oldest specimens date back to the 5th century AD.</p>
  </FeatureCard>

  <FeatureCard>
    <FaUsers className="icon" />
    <h3>CAUCASIAN LANGUAGE FAMILY</h3>
    <p>Together with other Caucasian languages, Georgian forms the Caucasian language family.</p>
  </FeatureCard>

  <FeatureCard>
    <FaFeatherAlt className="icon" />
    <h3>CLASSIC POETRY</h3>
    <p>Georgian is the language of the classic 12th-century poet Shota Rustaveli.</p>
  </FeatureCard>

  <FeatureCard>
    <FaHandshake className="icon" />
    <h3>CULTURAL DIALOGUE</h3>
    <p>The Georgian language has been an active participant in the dialogue of cultures for centuries.</p>
  </FeatureCard>

  <FeatureCard>
    <FaUniversity className="icon" />
    <h3>ARCHEOLOGICAL SIGNIFICANCE</h3>
    <p>Georgia is an interesting country for archaeologists, with a rich historical past.</p>
  </FeatureCard>

  <FeatureCard>
    <FaMapMarkerAlt className="icon" />
    <h3>TOURIST DESTINATION</h3>
    <p>Georgia is a major tourist destination, offering diverse landscapes, history, and culture.</p>
  </FeatureCard>
</FeatureGrid>



      </AboutSection>

      {/* Application Procedures */}
      {/* <ProcedureSection>
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
      </ProcedureSection> */}

      {/* Tuition Info */}
      {/* <TuitionSection>
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


      </TuitionSection> */}


      {/* Gallery */}
      <GallerySection>
        <h2>Explore Life in Georgia</h2>
        <GalleryGrid>
          <img src={gallery1} alt="Scotland University" />
          <img src={gallery2} alt="Students in Scotland" />
          <img src={gallery3} alt="Scotland Landscape" />
          {/* <img src={gallery4} alt="University in Scotland" /> */}
          {/* <img src={gallery5} alt="Scottish Student Life" /> */}
        </GalleryGrid>
      </GallerySection>
      <StudyInGeorgiaExtension/>
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

export default StudyInGeorgia;

