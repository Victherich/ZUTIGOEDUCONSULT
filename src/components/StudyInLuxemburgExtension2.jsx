import React from 'react';
import styled from 'styled-components';
import { FaFileAlt } from 'react-icons/fa';
import StudyInLuxemburgExtension1 from './StudyInLuxemburgExtension1';

const Container = styled.div`
  background: white;
  padding: 2rem;
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 86, 179, 0.1);
`;

const Title = styled.h1`
  color: #0056b3;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  color: #0056b3;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.6rem;
    color: #333;
  }
`;

const StudyInLuxemburgExtension2 = () => {
  return (
    <Container>
      <Title><FaFileAlt /> How to apply for a chance to study in Luxembourg:</Title>
      <Paragraph>
        Now that you know all the advantages of studying in Luxembourg, why not walk through the process of reaching there? Here’s how you can apply to study in Luxembourg in 2024:
      </Paragraph>

      <SubTitle>Admission requirements:</SubTitle>
      <List>
        <li>A recognized secondary school diploma for a Bachelor’s Degree</li>
        <li>A relevant bachelor’s degree for Master’s Degree</li>
        <li>Proof of language proficiency (English, French, or German, depending on the program)</li>
        <li>Relevant work or research experience if the university requires it</li>
      </List>

      <SubTitle>Documents required:</SubTitle>
      <List>
        <li>Application form</li>
        <li>Academic transcripts and diplomas</li>
        <li>Proof of language proficiency</li>
        <li>Curriculum Vitae (CV)</li>
        <li>Statement of purpose</li>
        <li>Letters of recommendation/s</li>
        <li>Valid passport</li>
      </List>
    </Container>
  );
};

export default StudyInLuxemburgExtension2;
