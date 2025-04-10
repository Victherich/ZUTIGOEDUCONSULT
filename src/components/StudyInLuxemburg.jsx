
import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaMoneyBillWave, FaHome, FaClock, FaBusinessTime, FaMapMarkedAlt, FaFlask, FaUniversity,FaUserGraduate, FaExchangeAlt, FaBriefcase, FaGlobe, FaBook, FaCameraRetro } from "react-icons/fa";
import heroImage from "../Images/5529.jpg";
import gallery1 from "../Images/luxe1.png";
import gallery2 from "../Images/luxe2.png";
// import gallery3 from "../Images/uk1.png";
import gallery4 from "../Images/sct2.jpg";
import gallery5 from "../Images/sct3.jpg";
import sct4 from '../Images/uk4.jpg'
import StudyInLuxemburgExtension1 from "./StudyInLuxemburgExtension1";
import StudyInLuxemburgExtension2 from "./StudyInLuxemburgExtension2";
import StudyInLuxemburgExtension3 from "./StudyInLuxemburgExtension3";

const StudyInLuxemburg = () => {
  return (
    <PageContainer >
      {/* Hero Section */}
      <HeroSection >
        <HeroContent >
          <h1>STUDY IN LUXEMBURG</h1>
         
          {/* <p>Canada is a very fantastic place to study, work and live in. The quality of life is very great and it’s ranked first in the world in terms of quality standard of living.</p> */}
    
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <h2 style={{color:"#ff6600"}}>STUDY IN LUXEMBURG</h2>
        <p>
        Studying at the University of Luxembourg is a uniquely enriching experience. The programs impart cutting-edge knowledge in a highly international, multilingual and distinctly interdisciplinary environment. Small classes ensure direct interaction between students and teaching staff.</p>
        <p>
        The University of Luxembourg is a world-class research university. It strives for excellence in both fundamental and applied research, and in education. It drives innovation for society, has a high proportion of graduate students, and combines research, teaching and societal impact.
        </p>
      
        <img src={gallery2} alt="gallery2"/>
        <h2 style={{ color: "#444" }}>Reasons to Study in LUXEMBURG</h2>
        <p>
        Luxembourg is a small country in Europe surrounded by neighbors such as Belgium to the west, France to the south, and Germany to the east. Sitting in the heart of Europe, and though it is a tiny country, Luxembourg has become a major international financial hub and houses several significant organizations such as the European Investment Bank and the Court of Justice of the European Union. Many international students are jumping at the chance to study in Luxembourg.</p>
        
        <p>
        Luxembourg is home to some of the best universities in the world and provides a fitting environment for students who want to excel anywhere in the globe. Luxembourg is one of the countries many students consider when pursuing their education, and this article is going to focus on some of the benefits of studying in Luxembourg.
        </p>

        <h2>
        Advantages of studying in Luxembourg
        </h2>

        <p>
        Luxembourg provides international students with many benefits. Given the size of the country, people often miss the fact that the chance to study in Luxembourg is a game changer. Let’s talk about the key benefits:
        </p>
        
        <FeatureGrid>
  <FeatureCard>
    <FaBriefcase className="icon" />
    <h3>Cosmopolitan society</h3>
    <p>People of different origins and from various corners of Europe and the rest of the world live in this country. During your study in Luxembourg experience, you will be on an international stage and will be getting to know people from different parts of the world. Most of them also understand other languages apart from French, German, and possibly Luxembourgish; especially the younger generation. 

    </p>
  
  </FeatureCard>

  <FeatureCard>
    <FaBriefcase className="icon" />
    <h3>High-ranked universities</h3>
    <p> Higher education in Luxembourg is still relatively new, however, the country’s universities boast a good position in international rankings regarding such factors as the research activity, quality of teachers, and employment rate among graduates. Universities in Luxembourg appear in the list of the best young universities in the world. Here are the top universities from Luxembourg:</p>
    <p>
    •	University of Luxembourg<br/>
•	Sacred Heart University Luxembourg<br/>
•	Luxembourg School of Business<br/>
•	LUNEX International University of Health, Exercise, and Sports<br/>
•	European Business University<br/>
 </p>
  </FeatureCard>

  <FeatureCard>
    <FaBriefcase className="icon" />
    <h3>Generous scholarships</h3>
    <p>Currently, Luxembourg actively attracts international students who want to continue their education at the highest level by providing competitive scholarships, including scholarships that also include stipends, accommodation, and health insurance. These can go up to your entire living expenses that you might be facing on a daily basis. 

    </p>
   
  </FeatureCard>

  <FeatureCard>
    <FaBriefcase className="icon" />
    <h3>Central European location</h3>
    <p>Luxembourg, a tiny country that is part of the European Union, provides a perfect location for studying. Whenever you are on school break, you can easily travel and maybe network with different economies of Western Europe including France, Belgium, and Germany, or simply tour famous places such as Paris and Amsterdam.
    </p>
   
  </FeatureCard>

  <FeatureCard>
    <FaBriefcase className="icon" />
    <h3>Thriving economy and job market</h3>
    <p>The country that ranks the highest in terms of GDP per capita is Luxembourg. Businesses have their headquarters or offices in Luxembourg City because the country has policies that support companies. By the time you complete your study, you will be a skilled graduate and ready to join a growing economy, with many jobs available.   </p>
   
  </FeatureCard>



</FeatureGrid>
      </AboutSection>



      <StudyInLuxemburgExtension1/> 
      <StudyInLuxemburgExtension2/>
      <StudyInLuxemburgExtension3/>

 



      {/* Gallery */}
      <GallerySection>
        <h2>Explore Life in LUXEMBURG</h2>
        <GalleryGrid>
          <img src={gallery1} alt="Scotland University" />
          <img src={gallery2} alt="Students in Scotland" />
        
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
  background-image:url(${heroImage});
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

export default StudyInLuxemburg;

