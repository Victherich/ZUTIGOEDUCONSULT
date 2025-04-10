import React from 'react';
import styled from 'styled-components';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import StudyInBarbadosExtension1 from './StudyInBarbadosExtension1';

const Container = styled.div`
  background: white;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  color: #0056b3;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const Heading = styled.h2`
  color: #0056b3;
  font-size: 1.5rem;
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

const programData = [
  {
    title: 'HEALTHCARE PROGRAMS',
    courses: [
      'Clinical Psychology: MSc, $5000',
      'Healthcare Management: MSc, $5500 (1st year), $4500 (other years)',
      'Physical Medicine and Rehabilitation: MSc, $5500 (1st year), $4500 (other years)',
    ],
  },
  {
    title: 'BUSINESS PROGRAMS',
    courses: [
      'Business Administration: MA, $4000',
      'International Business Management: MA, $5000',
      'International Marketing: MA, $3000',
      'Accounting: MA, $5000 ($4000)',
      'Finance: MA, $5000 ($4000)',
      'Marketing: MA, $5000 ($4000)',
      'Business Management: MA, $5000 ($4000)',
      'International Business Law: MA, $4000',
    ],
  },
  {
    title: 'ENGINEERING & TECHNOLOGY',
    courses: [
      'Agronomy (authorized): MSc, $5000',
      'Water Supply, Water Discharge and Rational Use and Protection of Water Resources (authorized): MSc, $5000',
      'Water Engineering (authorized): MSc, $5000',
      'Management and Policy of Technology (authorized): MSc, $5000',
      'Viticulture and Enology: MSc, $5000',
      'Biomedical Engineering: MSc, $5000',
      'Computer Science: MSc, $3000',
    ],
  },
  {
    title: 'EDUCATION & SOCIAL SCIENCES',
    courses: [
      'Education Administration: MA, $3500',
      'U.S. Foreign Affairs: MA, $3000',
      'English Philology: MA, $3000',
      'Caucasus Study: MA, $3000',
      'Methods of Teaching English Language: MA, $3000',
      'Turkish Philology: MA, $3000',
      'Higher Education Administration: MA, $3000',
      'Education Management: MA, $3000',
    ],
  },
  {
    title: 'MARITIME PROGRAMS',
    courses: [
      'Marine Transport Management: MA, $3000',
      'Ship Energetic/Power Installations and Mechanisms: MSc, $3000',
      'Ship and Port Electrical Systems and Energetic/Power Installations: MSc, $3000',
    ],
  },
  {
    title: 'BUSINESS PROGRAMS (BACHELOR LEVEL)',
    courses: [
      'Business Administration: BA, $4000, $2200',
      'International Business Management: BA, $5000, $5000',
      'Customs Brokerage (Customs Processing Specialist): Certificate, $2200, $2200',
      'Accounting: BA, $5000 (or $4000), $3000',
      'Finance: BA, $5000 (or $4000), $3000',
      'Marketing: BA, $5000 (or $4000), $3000',
      'Business Management: BA, $5000 (or $4000), $3000',
      'American Studies: BA, $3000, $3000',
    ],
  },
  {
    title: 'ENGINEERING & TECHNOLOGY (BACHELOR LEVEL)',
    courses: [
      'Computer Science: BSc, $4000',
      'Informatics: BSc, $5000 (or $4000), $3000',
      'Mechanical Engineering: BSc, $4000, $4000',
      'Information Technology: BSc, 4500 (1st year), 3500 (other years)',
      'Computer Engineering: BSc, $4000',
      'Electrical Engineering: BSc, $4000',
      'Biomedical Engineering: BSc, $4000',
      'Architecture and Design: BSc, $4000',
      'Chemistry and Biochemistry: BSc, $4000',
      'Civil Engineering: BSc, $4000',
      'Computational Mathematics: BSc, $4000',
      'Metallurgy: BSc, $4000',
      'Logistics: BSc, $4000',
      'Engineering Physics: BSc, $4000',
      'Construction Engineering: BSc, $4000',
      'Industrial Management & Technology: BSc, $3000 (first year), $3000 (second year)',
    ],
  },
  {
    title: 'MARITIME PROGRAMS (BACHELOR LEVEL)',
    courses: [
      'Marine Navigation: BSc, $3000 (first year), $2200 (second year), $800 (third year)',
      'Marine Electrical Engineering: BSc, $3000 (first year), $2200 (second year), $800 (third year)',
      'Marine Engineering: BSc, $3000 (first year), $2200 (second year), $800 (third year)',
      'Ports and Terminals Handling Equipment Operation: BSc, $3000 (first year), $2200 (second year), $800 (third year)',
    ],
  },
  {
    title: 'AVIATION PROGRAMS',
    courses: [
      'Aircraft Engineering (Mechanical): MSc, $3000',
      'Aeronautical Engineering (Avionics): MSc, $3000',
      'Piloting (Commercial Pilot License): MSc, $48,000',
      'Private Pilot - III Level: Certificate, $42,000',
      'Commercial Pilot - IV Level: (Implied to be included in the $48,000 MSc fee)',
      'Design and Manufacture of Aircraft: MSc, $3000',
    ],
  },
  {
    title: 'SOCIAL SCIENCES PROGRAMS',
    courses: [
      'Public Administration: MA, $5000',
      'Diplomacy and International Relations: MA, $5000',
      'Comparative Contract Law (English): MA, $5000',
      'International Business Law: MA, $4000',
      'Clinical Psychology: MSc, $5000',
      'Economics: MSc, $5000',
      'Public Health: MSc, $5000',
      'Public Relations: MA, $5000',
      'Cinematography Specializations (Film Directing and Film Scriptwriting): MA, $5000',
      'International Relations and Politics: MA, $3000',
      'IT Management: MSc, $5000',
    ],
  },
  {
    title: 'HEALTH SCIENCES PROGRAMS',
    courses: [
      'Pharmaceutical Analysis: MSc, $7000',
      'Pharmaceutical Management: MSc, $7000',
      'Pharmaceutical Cosmetology: MSc, $7000',
      'Industrial Pharmacy: MSc, $7000',
      'Public Health Management and Health Policy: MSc, $7000',
      'Physical Medicine and Rehabilitation: MSc, (Price not visible in the image)',
      'Health Care Economics and Management: MSc, (Price not visible in the image)',
    ],
  },
];

const StudyInBarbadosExtension2 = () => {
  return (
    <Container>
      <Title>PROGRAMS AND COST</Title>
      <Wrapper>
        {programData.map((program, idx) => (
          <Section key={idx}>
            <Heading>
              <FaMoneyCheckAlt /> {program.title}
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

export default StudyInBarbadosExtension2;
