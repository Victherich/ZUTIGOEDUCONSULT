
import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaMoneyBillWave, FaHome, FaClock, FaBusinessTime, FaMapMarkedAlt, FaFlask, FaUniversity,FaUserGraduate, FaExchangeAlt, FaBriefcase, FaGlobe, FaBook, FaCameraRetro } from "react-icons/fa";
import heroImage from "../Images/aust9.jpg";
import gallery1 from "../Images/aust1.jpg";
import gallery2 from "../Images/aust2.png";
import gallery3 from "../Images/aust3.jpg";
import gallery4 from "../Images/sct2.jpg";
import gallery5 from "../Images/aust5.jpg";
import gallery6 from "../Images/aust6.jpg";
import gallery7 from "../Images/aust7.jpg";
import aust4 from '../Images/aust4.jpg'
import sct4 from '../Images/uk4.jpg'
import StudyInAustraliaExtension2 from "./StudyInAustraliaExtension2";


const StudyInAustralia = () => {
  return (
    <PageContainer >
      {/* Hero Section */}
      <HeroSection >
        <HeroContent >
          <h1>STUDY IN AUSTRALIA</h1>
         
          {/* <p>Canada is a very fantastic place to study, work and live in. The quality of life is very great and it’s ranked first in the world in terms of quality standard of living.</p> */}
    
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <h2 style={{color:"#ff6600"}}>STUDY IN AUSTRALIA</h2>
        <p>
There are abundant reasons why students choose Australia.
Australia is a great country to study in Australia. The climate is perfect for students, and the scenery is incredible. The beaches are some of the best in the world, and there are plenty of opportunities to surf, hike, and explore. The culture is also very laid-back and easygoing, which makes it a great place to live while you study. A new study has found that studying in Australia may be the key to a successful career. The study, which was conducted by the University of Melbourne, found that students who study in Australia are more likely to find employment after graduation than those who don’t.
</p>
        <p>
        The study surveyed over 1,000 graduates from around the world and found that Australian students were more likely to be employed full-time six months after graduation. They were also more likely to be employed in their field of study and to have higher salaries than their counterparts who didn’t study in Australia. </p>
      
      




        <h2 style={{ color: "#444" }}>Reasons to Study in Australia</h2>
        <p>
        There are many reasons why students choose to study in Australia. The country has a great education system, and there are many opportunities to work and travel while you study. The climate is also perfect for students who want to experience all four seasons. Australia is a very diverse country, and you can meet people from all over the world while you study here.
        </p>
        <FeatureGrid>
  <FeatureCard>
    <FaMoneyBillWave className="icon" />
    <h3>COST OF STUDYING</h3>
    <p>Australia is an expensive country to live in, but scholarships and grants are available to help students with the cost of living and studying. The Australian government offers a range of scholarships and grants to help international students with the cost of living and studying in Australia. There are also several private scholarships and grants available.</p>
  <p>
  The cost of living in Australia depends on your lifestyle. If you live modestly, you can expect to spend around $18,000 per year on essentials like food, accommodation, utilities, and transport. If you live a little more extravagantly, your costs could be closer to $24,000 per year. Of course, if you share accommodation or have other ways to save money, your costs will be lower.
  </p>
  <p>
  Tuition fees for international students vary depending on the institution and course you choose.
  </p>
  </FeatureCard>

  <FeatureCard>
    <FaBriefcase className="icon" />
    <h3>WORK</h3>
    <p>Australia offers a variety of work opportunities for international students. Many students are able to find part-time work in addition to their studies, which can help offset the cost of living and tuition. Additionally, there are many opportunities for internships and volunteer work. These experiences can provide valuable skills and experience that can be helpful in securing full-time employment after graduation.</p>
    <p>
    There are a number of resources available to help students find employment in Australia. The Australian Government’s Job Search website is a good place to start your search. Additionally, your university’s career center can provide information about job postings and employer fairs. Networking is also a key way to find employment in Australia. Attend events and meetups related to your field of interest, and get connected with professionals who may have leads on job openings.
    </p>
  </FeatureCard>



</FeatureGrid>


      </AboutSection>


        {/* Gallery */}
        <GallerySection>
        <h2>Explore Life in Australia</h2>
        <GalleryGrid>
          <img src={gallery5} alt="Scotland University" />
          <img src={gallery6} alt="Students in Scotland" />
          <img src={gallery7} alt="Scotland Landscape" />
          {/* <img src={gallery4} alt="University in Scotland" /> */}
          {/* <img src={gallery5} alt="Scottish Student Life" /> */}
        </GalleryGrid>
      </GallerySection>

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
          <p><strong>Application | Visa Support fee: </strong> From ₦250,000</p>
        </ProcessingFee>
      </ProcedureSection>

      {/* Tuition Info */}
      <TuitionSection>
        <h2>Basic Information About Studying in Australia</h2>
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
        <h2>Explore Life in Australia</h2>
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
  background-image:url(${aust4});
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

export default StudyInAustralia;

