import React from "react";
import styled from "styled-components";
import { FaUniversity, FaGraduationCap, FaGlobe, FaMedal, FaUsers, FaBook } from "react-icons/fa";

// Styled Components
const Container = styled.div`

  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
  background: #f9f9f9;

  @media(max-width:428px){
    padding:0px;
    padding:20px 0px;
  }
`;

const Header = styled.header`
  text-align: center;
  background: #003366;
  color: white;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
`;

const Section = styled.section`
  background: white;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;

  @media(max-width:428px){
  padding:0px;
  padding:20px 5px;
  }
`;

const SectionTitle = styled.h2`
  color: #ff7f50;
  border-bottom: 2px solid #003366;
  padding-bottom: 5px;
  margin-top: 20px;

  @media(max-width:768px){
    text-align:center;
  }
`;

const LevelBox = styled.div`
  background: #eef3f7;
  padding: 15px;
  margin: 10px 0;
  border-left: 5px solid #003366;
  border-radius: 5px;
  display: flex;
  align-items: center;
  

  @media(max-width:428px){
    padding:0px;
    padding:15px 5px;
  }
`;

const Icon = styled.div`
  font-size: 30px;
  margin-right: 15px;
  color: #003366;
`;

const List = styled.ul`
  padding-left: 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
`;

const StatBox = styled.div`
  background: #003366;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
`;

const Footer = styled.footer`
  text-align: center;
  background: #003366;
  color: white;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
`;

const StudyInGeorgiaExtension = () => {
  return (
    <Container>
      <Header>
        <Title>Higher Education System in Georgia</Title>
        <p>Georgia offers a well-structured, internationally recognized higher education system with competitive advantages for students worldwide.</p>
      </Header>

      <Section>
        <SectionTitle>
THE HIGHER EDUCATION SYSTEM IN GEORGIA CONSISTS OF THREE ACADEMIC LEVELS.
</SectionTitle>
        <p>Higher Education Institutions use the European Credit Transfer and Accumulation System (ECTS) Guidelines when developing and implementing educational programmes. An educational programme at a Higher Education Institution includes approximately 60 credits during one academic year.</p>

        <LevelBox>
          <Icon><FaGraduationCap /></Icon>
          <div>
            <h3>First Level - Bachelor's Degree</h3>
            <p>The first level of higher education includes:</p>
            <List>
              <li>Bachelor's educational programmes - at least 240/180 ECTs with Bachelor’s academic degree.</li>
              <li>Bachelor programs in Arts, Business, and Administration, as an exception, may comprise a minimum of 180 credits. In other fields of study, 180-credit Bachelor's educational programmes can only be implemented as a joint programme between a Georgian Higher Education Institution and a foreign Higher Education Institution recognized under the legislation of that foreign country.</li>
              <li>One-level educational programme in Medicine – 360 ECTs with academic degree of Medical Doctor.</li>
                <li>
                One-level educational programme in Dentistry - 300 ECTs with academic degree of Doctor of Dental Medicine.
                </li>
                <li>
                Integrated Master's programme in Veterinary - 300 ECTs with academic degree of Master in Veterinary.
                </li>
                <li>
                Teacher training integrated Bachelor's-Master's educational programme - 300 ECTs with academic degree of Master in Education.
                </li>
            </List>
          </div>
        </LevelBox>

        <LevelBox>
          <Icon><FaUniversity /></Icon>
          <div>
            <h3>Second Level - Master's Degree</h3>
            <p>Master's educational programmes require:</p>
            <List>
              <li>At least 120/60 ECTS for a Master’s degree.</li>
              <li>Master’s program in Business and Administration, as an exception, may comprise a minimum of 60 credits for the purpose of obtaining a master's academic degree, including obtaining an Executive Master of Business Administration (EMBA) qualification.</li>
              <li>Possession of a bachelor's degree or an equivalent academic degree is the prerequisite for admission to the programme. The admission rules and conditions for this programme are set by the respective Higher Education Institution. For obtaining the degree of Executive Master of Business Administration (EMBA), candidates are additionally required to have at least 5 years of professional experience in the management/administrative field.</li>
                <li>
                Master's degree educational programmes including at least 60 credits do not provide admission to the next level of education, doctoral studies.
                </li>
            </List>
          </div>
        </LevelBox>

        <LevelBox>
          <Icon><FaBook /></Icon>
          <div>
            <h3>Third Level - Doctoral Programs</h3>
            <p>Doctoral education requirements:</p>
            <List>
              <li>Those who hold a master's academic degree or an equivalent qualification are eligible to be admitted to doctoral studies, except in cases where the individual has obtained a master's degree through a master's educational programme consisting of at least 60 credits. The duration of the doctoral educational programme is at least 3 years and its study component comprises no more than 60 ECTS credits. The graduate of the doctoral educational programme is awarded a doctoral academic degree. The graduates receive a diploma verifying the doctoral academic degree.</li>
              <li>
Admission to first-level higher education academic programs requires successful completion of the Unified National Examinations. Individuals who hold a state certificate of General Education or an equivalent qualification are entitled to pursue Bachelor’s and other first-level academic programs.
    </li>
              <li>Admission to Master's educational programs requires successful completion of the Common Master Exams. Higher Education Institutions may establish additional admission requirements. Individuals who hold a Bachelor's degree or an equivalent academic degree are entitled to pursue Master's studies.</li>
                <li>
                Admission prerequisites for Doctoral studies are determined by the individual Higher Education Institution.
Foreign citizens may enroll in various levels of higher education under different conditions than those stated above, in following regulations established by Georgian legislation. 

                </li>
            </List>
          </div>
        </LevelBox>

        <SectionTitle>Admission Requirements</SectionTitle>
        <List>
          <li><strong>Bachelor's Degree:</strong> Requires passing the Unified National Examinations.</li>
          <li><strong>Master’s Degree:</strong> Requires completion of the Common Master Exams.</li>
          
          <li><strong>Doctoral Degree:</strong> Admission is determined by individual Higher Education Institutions.</li>
          <li><strong>Foreign Students:</strong> Special conditions apply as per Georgian legislation.</li>
        </List>

        <SectionTitle>General Data of Higher Education in Georgia</SectionTitle>
        <StatsGrid>
          <StatBox><FaUniversity /> <p>64 Higher Education Institutions</p></StatBox>
          <StatBox><FaBook /> <p>1702 Higher Educational Programmes</p></StatBox>
          <StatBox><FaGlobe /> <p>243 English Language Programmes</p></StatBox>
          <StatBox><FaMedal /> <p>200 International Exchange Programmes</p></StatBox>
          <StatBox>
            <FaGraduationCap/><p>21 Joint Degree Programmes</p>
          </StatBox>
          <StatBox><FaUsers /> <p>More than 150,000 Students</p></StatBox>
          <StatBox><FaUsers /> <p>More than 30,000 International Students</p></StatBox>
        </StatsGrid>

        <SectionTitle>Competitive Advantages for International Students to choose
            Georgia
        </SectionTitle>
        <List>
  <li>Affordable quality higher education and affordable cost of living;</li>
  <li>Safe and secure environment according to international safety rankings of countries;</li>
  <li>Easy flight connections and visa-free regimes;</li>
  <li>Active and vibrant student life and cultural diversity;</li>
  <li>Opportunity to pursue 3- and 4-year bachelor degrees, as well as one- and two-year master degrees;</li>
  <li>Offering ample of high-quality academic programs in English;</li>
  <li>Access to affordable and high-quality medical education</li>
</List>

      </Section>

    
    </Container>
  );
};

export default StudyInGeorgiaExtension;
