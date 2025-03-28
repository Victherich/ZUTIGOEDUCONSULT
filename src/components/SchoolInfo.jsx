import React from "react";
import styled from "styled-components";
import { FaUniversity, FaBook, FaDollarSign, FaImages } from "react-icons/fa";
import im26 from '../Images/im28.jpg'
import SubHero2 from "./SubHero2";
import im1 from "../Images/im1.jpeg";
import im2 from "../Images/im2.jpg";
import im4 from "../Images/im4.png";
import im5 from "../Images/im5.png";
import im6 from "../Images/im6.jpg";
import im7 from "../Images/im7.png";
import im8 from "../Images/im8.JPG";
import im9 from "../Images/im9.jpg";
import im10 from "../Images/im10.png";
import im11 from "../Images/im11.jpg";
import im12 from "../Images/im12.png";
import im13 from "../Images/im13.jpg";
import im15 from "../Images/im15.jpg";
import im16 from "../Images/im16.png";
import SubHero3 from "./SubHero3";
import GeneralFee from "./GeneralFeeComponent";

// Styled Components
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #333;
`;

const HeroSection = styled.div`
  background: url(${im26}) no-repeat center/cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    z-index: 1;
    position: relative;
  }
  
  p {
    font-size: 1.5rem;
    z-index: 1;
    position: relative;
  }

  @media(max-width:428px){
  h1{
  font-size:2.4rem;
  }
  }
`;

const Section = styled.div`
  max-width: 1100px;
  margin: 50px auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0056b3;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom:50px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: center;
  }

  th {
    background: #0056b3;
    color: white;
  }

  tr:nth-child(even) {
    background: #f9f9f9;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 20px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const SchoolInfo = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <div>
          <h1>American University of Barbados</h1>
          <p>School of Medicine - Excellence in Medical Education</p>
        </div>
      </HeroSection>

      {/* About Section */}
      <Section>
        <Title><FaUniversity /> About AUB</Title>
        <Text>
        The American University of Barbados, School of Medicine with its campus located in Wildey, Barbados is a popular choice when reviewing options to study medicine in the Caribbean. AUB offers a comprehensive medical curriculum and quality education to its students. The medical school is accredited by CAAM-HP and the Barbados Accreditation Council (BAC). It is also listed by the World Federation for Medical Education (WFME) and the Foundation for Advancement of International Medical Education and Research (FAIMER) in the World Directory of Medical Schools. Thus, AUB graduate degrees are recognized throughout the world.</Text>
      
      <Text>
      AUB's exemplary model of education comprises of an integrated US-based curriculum with extensive USMLE preparation, research programs, and community-based events in a multi-cultural environment which educates students in a variety of academic and professional disciplines, leading to a broader perspective and richer learning experience. The programs are led by dedicated and experienced faculty who combine rigorous classroom instruction with mentorship. AUB nurtures its students to become competent healthcare providers and since its degrees are globally recognized, it opens up pathways to many countries. The medical school curriculum exemplifies innovation using high-tech learning tools and its ingenious enthusiasm aims to educate young medical graduates and prepare them as the next generation of healthcare leaders. During the Clinical Science Program (Rotations) students participate in supervised patient care rotating through various medical specialties. AUB continually reviews opportunities to broaden the clinical exposure of our students in the United States and other countries.
      </Text>



      <Text>
      Classroom learning meets real world experience which complements coursework with practical experience at our on-campus community clinic. It provides students an opportunity to interact with patients and other healthcare professionals from the very beginning of their medical journey. Considerable emphasis is placed on developing professionalism and humanism traits as well as a commitment to the community and cultural diversity throughout the study.
      </Text>


<SubHero3/>
      <Text>
      AUB provides students a platform to develop holistically while its conducive environment makes it easy for them to adapt to the Caribbean culture. In addition to rendering quality education, AUB strives to ensure that its students grow academically, professionally and socially. These characteristics we believe will soon see American University of Barbados evolve as one of the most sought-after names in the field of medicine and also escalate the ladder on the Caribbean medical schools ranking. The school follows a holistic admissions process wherein the admission committee evaluates prospective students on the basis of their academic credits. With a rolling admission policy, applications are accepted all-year round, with classes starting in January, May, and September respectively.
      </Text>

      <Text>
      The American University of Barbados Office of Admission, assists students in every aspect of their college search process. This being one of the many reasons why AUB has a 90% first-year retention rate, highest in the nation for a regional institution (public or private). The Office of Admissions at AUB-with the support of the campus community and in accordance with the mission, vision, goals and ethical framework of the institution-seeks to attract and enroll a full class of students who will uphold and advance the exceptional quality of the University. These students should demonstrate academic excellence, intellectual curiosity, a desire to be challenged by rigorous coursework and collaborative research, and the potential for further academic success within the University's educational model. The Office of Admissions seeks those students whose experience at AUB will be mutually beneficial to both themselves and the institution.
      </Text>


      </Section>



      {/* Study Programs */}
      <Section>
        <Title><FaBook /> Study Programmes</Title>
        <Text>
         
Studying at the University of Luxembourg is a uniquely enriching experience. The programmes impart cutting edge knowledge in a highly international, multilingual and distinctly interdisciplinary environment. Small classes ensure direct interaction between students and teaching staff. 
</Text>
      </Section>

      <SubHero2/>
      <GeneralFee/>

      {/* Tuition Fees */}
      <Section>
        <Title><FaDollarSign /> Tuition Fees</Title>
        <Table>
          <thead>
            <tr>
              <th>Semester</th>
              <th>Pre-Medical ($)</th>
           
            </tr>
          </thead>
          <tbody>
            <tr><td>Semester I</td><td>5,500</td></tr>
            <tr><td>Semester II</td><td>5,500</td></tr>
            <tr><td>Semester III</td><td>5,500</td></tr>
            <tr><td>Semester IV</td><td>5,500</td></tr>
         
          </tbody>
        </Table>

        <Table>
          <thead>
            <tr>
              <th>Semester</th>
            
              <th>Basic Sciences ($)</th>
           
            </tr>
          </thead>
          <tbody>
            <tr><td>Semester I</td><td>8,500</td></tr>
            <tr><td>Semester II</td><td>8,500</td></tr>
            <tr><td>Semester III</td><td>8,500</td></tr>
            <tr><td>Semester IV</td><td>8,500</td></tr>
            <tr><td>Semester V</td><td>(Pre-Clinical) 9,500</td></tr>
           
          </tbody>
        </Table>
        <Table>
          <thead>
            <tr>
              <th>Semester</th>
         
              <th>Clinical Sciences ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Semester I</td><td>12,500</td></tr>
            <tr><td>Semester II</td><td>12,500</td></tr>
            <tr><td>Semester III</td><td>12,500</td></tr>
            <tr><td>Semester IV</td><td>12,500</td></tr>
            <tr><td>Semester V</td><td>12,500</td></tr>
            <tr><td>Semester V</td><td>12,500</td></tr>
          </tbody>
        </Table>
      </Section>

      {/* Gallery Section */}
      <Section>
        {/* <Title><FaImages /> Gallery</Title> */}
        <GalleryGrid>
        <img src={im15} alt="Campus 1" />
<img src={im2} alt="Campus 2" />

<img src={im4} alt="Campus 4" />

<img src={im6} alt="Campus 6" />
<img src={im7} alt="Campus 7" />
<img src={im8} alt="Campus 8" />
<img src={im9} alt="Campus 9" />
<img src={im10} alt="Campus 10" />
<img src={im11} alt="Campus 8" />
<img src={im12} alt="Campus 9" />
<img src={im13} alt="Campus 10" />
<img src={im16} alt="Campus 5" />

        </GalleryGrid>
      </Section>
    </Container>
  );
};

export default SchoolInfo;
