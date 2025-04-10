// CoursePrograms.jsx
import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';

const Container = styled.div`
  background: rgba(0,0,255,0.1);
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const Heading = styled.h2`
  color: #0056b3;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 1rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const programs = [
  {
    title: 'AVIATION PROGRAMS',
    courses: [
      'Aircraft Engineering (Mechanical): MSc.',
      'Aeronautical Engineering (Avionics): MSc.',
      'Piloting (Commercial Pilot License): MSc.',
      'Private Pilot - III Level: Certificate.',
      'Commercial Pilot - IV Level: (This is implied to be part of the MSc Commercial Pilot License)',
      'Design and Manufacture of Aircraft: MSc.',
    ],
  },
  {
    title: 'SOCIAL SCIENCES PROGRAMS',
    courses: [
      'Public Administration: MA',
      'Diplomacy and International Relations: MA',
      'Comparative Contract Law (English): MA',
      'International Business Law: MA',
      'Clinical Psychology: MSc',
      'Economics: MSc',
      'Public Health: MSc',
      'Public Relations: MA',
      'Cinematography Specializations (Film Directing and Film Scriptwriting): MA',
      'International Relations and Politics: MA',
      'IT Management: MSc',
    ],
  },
  {
    title: 'HEALTH SCIENCES PROGRAMS',
    courses: [
      'Pharmaceutical Analysis: MSc.',
      'Pharmaceutical Management: MSc.',
      'Pharmaceutical Cosmetology: MSc.',
      'Industrial Pharmacy: MSc.',
      'Public Health Management and Health Policy: MSc.',
      'Physical Medicine and Rehabilitation: MSc.',
      'Health Care Economics and Management: MSc.',
    ],
  },
  {
    title: 'HEALTHCARE PROGRAMS',
    courses: [
      'Clinical Psychology: MSc',
      'Healthcare Management: MSc',
      'Physical Medicine and Rehabilitation: MSc',
    ],
  },
  {
    title: 'BUSINESS PROGRAMS',
    courses: [
      'Business Administration: MA',
      'International Business Management: MA',
      'International Marketing: MA',
      'Accounting: MA',
      'Finance: MA',
      'Marketing: MA',
      'Business Management: MA',
      'International Business Law: MA',
    ],
  },
  {
    title: 'ENGINEERING & TECHNOLOGY',
    courses: [
        'Agronomy (authorized): MSc',
        'Water Supply, Water Discharge, and Rational Use and Protection of Water Resources (authorized): MSc',
        'Water Engineering (authorized): MSc',
        'Management and Policy of Technology (authorized): MSc',
        'Viticulture and Enology: MSc',
        'Biomedical Engineering: (Degree type not specified)',
        'Computer Science: MSc',
        'Education Administration: MA',
        'U.S. Foreign Affairs: MA',
        'English Philology: MA',
        'Caucasus Study: MA',
        'Methods of Teaching English Language: MA',
        'Turkish Philology: MA',
        'Higher Education Administration: MA',
        'Education Management: MA',
      ],
      
  },
  {
    title: 'MARITIME PROGRAM',
    courses: [
      'Marine Transport Management: MA',
      'Ship Energetic/Power Installations and Mechanisms: MSc',
      'Ship and Port Electrical Systems and Energetic/Power Installations: MSc',
    ],
  },
];

const StudyInBarbadosExtension1 = () => {
  return (
    <Container>
        <h1 style={{textAlign:"center", marginBottom:"20px"}}>Course Programs Offered in Barbados</h1>
      <Wrapper>
        {programs.map((program, idx) => (
          <Section key={idx}>
            <Heading>
              <FaGraduationCap /> {program.title}
            </Heading>
            <List>
              {program.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </List>
          </Section>
        ))}
      </Wrapper>
    </Container>
  );
};

export default StudyInBarbadosExtension1;
