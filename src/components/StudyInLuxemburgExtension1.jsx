import React from 'react';
import styled from 'styled-components';
import { FaUniversity } from 'react-icons/fa';
import StudyInLuxemburg from './StudyInLuxemburg';

const Container = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: #003366;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #003366;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  padding-left: 1.25rem;
  list-style-type: decimal;

  li {
    margin-bottom: 1.2rem;
  }
`;

const StudyInLuxemburgExtension1 = () => {
  return (
    <Container>
      <Title><FaUniversity /> What studying in Luxembourg looks like in 2024?</Title>
      <Paragraph>
        In 2024, Luxembourg’s education and employment landscape has become even brighter for international students. There are a number of factors contributing to it:
      </Paragraph>
      <List>
        <li>
          <SectionTitle>Welcoming place for international students</SectionTitle>
          <Paragraph>
            Luxembourg has been accommodating more and more international students. For example, the University of Luxembourg, designed by architects Ion Mincu and Christian Kerez, began the academic year 2022/2023 at a modern, hi-tech Belval campus. The international student population is predicted to go from 4,500 at present to 7,000 by 2027.
          </Paragraph>
        </li>
        <li>
          <SectionTitle>New growth sectors</SectionTitle>
          <Paragraph>
            Today Luxembourg’s finance and EU administration are most developed. That’s not all, the government also set its sights on industries such as technology, space, and life sciences. Fresh opportunities for graduates in the Fintech, AI, and biomedical fields will open in 2024.
          </Paragraph>
        </li>
        <li>
          <SectionTitle>Better research opportunities</SectionTitle>
          <Paragraph>
            As for the STEM students, Luxembourg has amazing research institutions. Case in point: Luxembourg Institute of Health is already introducing major medical breakthroughs in cancer, Parkinson’s, and more. Students are also able to work on innovative initiatives.
          </Paragraph>
        </li>
        <li>
          <SectionTitle>Employment assistance</SectionTitle>
          <Paragraph>
            Apart from the internship information provided by your university, the government of the country helps non-EU students to find year-long post-study employment under the new “Back to Luxembourg” scheme.
            You could be the next one to join the elite group of students who receive their degree from the prestigious Luxembourg University.
          </Paragraph>
        </li>
      </List>
    
    </Container>
  );
};

export default StudyInLuxemburgExtension1;
