import React from 'react';
import styled from 'styled-components';
import { FaMoneyBillWave } from 'react-icons/fa';
import StudyInLuxemburgExtension2 from './StudyInLuxemburgExtension2';

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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  th, td {
    border: 1px solid #ccc;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: #0056b3;
    color: white;
  }

  td {
    background-color: #f9f9f9;
    color: #333;
  }
`;

const FooterNote = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: bold;
  color: #333;
`;

const StudyInLuxemburgExtension3 = () => {
  return (
    <Container>
      <Title><FaMoneyBillWave /> Cost of living in Luxembourg</Title>
      <Paragraph>
        Living costs concern every person, especially international students. Regarding the expenses of living in Luxembourg for Indian students, it is based on the kind of accommodation and the area. While there are scholarships and financial aid available for students, it is best to know what you are signing up for. Let’s take a look:
      </Paragraph>

      <Table>
        <thead>
          <tr>
            <th>Expenses</th>
            <th>Average Cost (EUR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Accommodation</td>
            <td>1000-1300</td>
          </tr>
          <tr>
            <td>Groceries</td>
            <td>250-450</td>
          </tr>
          <tr>
            <td>Public transportation</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Health insurance (Mandatory for international students)</td>
            <td>50-100</td>
          </tr>
          <tr>
            <td>Phone and internet</td>
            <td>30-50</td>
          </tr>
          <tr>
            <td>Study material</td>
            <td>50-100</td>
          </tr>
          <tr>
            <td>Miscellaneous expenses</td>
            <td>100-200</td>
          </tr>
        </tbody>
      </Table>

      <FooterNote>Application | Visa Support fee: from ₦250,000</FooterNote>
    </Container>
  );
};

export default StudyInLuxemburgExtension3;
