import React from "react";
import styled from "styled-components";

const FeeContainer = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const FeeItem = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 8px 0;
  font-weight: 500;
  
  span {
    font-weight: 700;
    color: #007bff;
  }
`;

const GeneralFee = () => {
  return (
    <FeeContainer>
      <Title>General Fee</Title>
      <FeeItem>Application Fee: <span>$100</span> (Non-refundable)</FeeItem>
      <FeeItem>Student Visa & Processing Fee: <span>$300</span> (Non-refundable)</FeeItem>
    </FeeContainer>
  );
};

export default GeneralFee;
