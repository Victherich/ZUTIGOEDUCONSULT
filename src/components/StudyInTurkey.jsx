
import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaMoneyBillWave, FaUniversity,FaUserGraduate, FaExchangeAlt, FaBriefcase, FaGlobe, FaBook, FaCameraRetro } from "react-icons/fa";
import heroImage from "../Images/tk1.jpg";
import gallery1 from "../Images/tk2.jpg";
import gallery2 from "../Images/tk3.jpg";
import gallery3 from "../Images/tk1.jpg";
import gallery4 from "../Images/sct2.jpg";
import gallery5 from "../Images/sct3.jpg";
import sct4 from '../Images/5984.jpg'

const StudyInTurkey = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>STUDY AND WORK IN TURKEY</h1>
         
          <p>Turkey is an attraction to everyone in the world because of the spiritual and physical features that are unique to each single city.</p>
        <p>For example, İstanbul is the only city in the world that connects two continents.</p>
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <h2 style={{color:"#ff6600"}}>STUDY AND WORK IN TURKEY</h2>
        <p>Studying in Turkey gives you internationally recognized certificates. It is interesting to study in Turkey because it does not only consist of studying, it also consists of fun and making friends.</p>
        <p>Turkey has a healthy and welcoming environment for students. Turkey is a popular choice and destination for students from around the world because of the high standard of living offered by Turkish universities at low tuition fees.</p>
      
        <img src={gallery2} alt="gallery2"/>
        <h2 style={{ color: "#444" }}>Reasons to Study in Turkey</h2>
        <FeatureGrid>
          <FeatureCard>
            <FaUniversity className="icon" />
            <h3>QUALITY EDUCATION</h3>
            <p>Turkish universities give a high level of education quality. Studying in Turkey also gives you internationally recognized certificates. The degrees and certificates are recognized all over the world.</p>
          </FeatureCard>

          <FeatureCard>
            <FaMoneyBillWave className="icon" />
            <h3>COST OF LIVING</h3>
            <p>Turkey offers international students a great quality of life and a low cost of living as a student. As a student, you enjoy discounts on transportation fees, museum entries, cinemas, and many other activities to facilitate your life.</p>
          </FeatureCard>

          <FeatureCard>
            <FaUserGraduate className="icon" />
            <h3>STUDENT FRIENDLY</h3>
            <p>Turkey is a very student-friendly country. The idea behind the existence of social clubs, sports teams, and cultural events at the university is to bring students together and make distant geographies close. The most active parts of Turkey are the places where students socialize.</p>
          </FeatureCard>

          <FeatureCard>
            <FaGlobe className="icon" />
            <h3>MULTI-CULTURAL ENVIRONMENT</h3>
            <p>You will not feel left out as an international student studying in Turkey because there are several other international students. This opens students up to exciting mixtures of cultures where they get to learn about different cultures and make friendships.</p>
          </FeatureCard>

          <FeatureCard>
            <FaExchangeAlt className="icon" />
            <h3>ERASMUS OPPORTUNITIES</h3>
            <p>Studying in Turkey gives you the qualification for an Erasmus exchange as Turkey is a partner. This allows you to travel and study in a European country for a semester or two. This opportunity allows students to experience multiple universities, campuses, and countries within just one university education.</p>
          </FeatureCard>
        </FeatureGrid>
      </AboutSection>

      {/* Application Procedures */}
      <ProcedureSection>
        <h2>Application Procedures</h2>
        <p>REQUIRED DOCUMENTS</p>
        <ProcedureList>
        <ProcedureItem>
  <FaCheckCircle className="icon" /> Copy of Passport (only the page(s) that shows your photo, personal details and signature).
</ProcedureItem>
<ProcedureItem>
  <FaCheckCircle className="icon" /> Copy of Secondary and Senior Secondary High School Result or Certificates | WAEC | NECO.
</ProcedureItem>
<ProcedureItem>
  <FaCheckCircle className="icon" /> Copy of Bachelor Degree Certificate and Mark Sheet | Transcripts (applicable only for postgraduate applicants e.g. MBA).
</ProcedureItem>
<ProcedureItem>
  <FaCheckCircle className="icon" /> Copy of Recent Passport Photograph.
</ProcedureItem>
 </ProcedureList>
        <ProcessingFee>
          <FaMoneyBillWave className="icon" />
          <p><strong>Application | Processing Fee | Service Charge:</strong> ₦200,000</p>
        </ProcessingFee>
      </ProcedureSection>

      {/* Tuition Info */}
      <TuitionSection>
        <h2>Basic Information About Studying in Turkey</h2>
        <InfoGrid>
          <InfoCard>Deposit of $1000 of tuition fees is expected to be paid directly to the university before visa application/traveling</InfoCard>
          <InfoCard>Admission processing duration: 1 - 2 weeks</InfoCard>
         </InfoGrid>
      </TuitionSection>

      <TableContainer>
      <h2>SCHOOL FEES</h2>
      <StyledTable>
        <tbody>
          <TableRow>
            <TableData>Tuition Fee from $3000/year for Undergraduate (BSc.)</TableData>
          </TableRow>
          <TableRow>
            <TableData>Tuition Fee from $4000/year for Masters Degree (MSc.)</TableData>
          </TableRow>
          <TableRow>
            <TableData>Hostel Accommodation from $600/year</TableData>
          </TableRow>
        </tbody>
      </StyledTable>
    </TableContainer>

      {/* Gallery */}
      <GallerySection>
        <h2>Explore Life in Turkey</h2>
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

export default StudyInTurkey;

