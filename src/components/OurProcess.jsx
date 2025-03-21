import React from "react";
import styled from "styled-components";
import { FaUserCheck, FaUniversity, FaFileSignature, FaPlaneDeparture, FaCheckCircle } from "react-icons/fa";

const OurProcess = () => {
  return (
    <ProcessContainer>
      <Title>Our Process</Title>
 

      <Subtitle>We provide professional, complete and fast-track access to world-class and career oriented education to foster development.</Subtitle>

      <StepsContainer>
        <Step>
          <StepIcon>
            <FaUserCheck />
          </StepIcon>
          <StepContent>
            <StepNumber>1</StepNumber>
            <h3>SEND US YOUR DOCUMENTS</h3>
            <p>Document required to make the application on your behalf
Academic Qualification, CV, Passport, Personal Statement, Any other supporting document that you think would be useful for your application.
We will review the documents that you have sent us and advise on any improvement to maximise the chances of successful offers. We can apply to multiple universities on your behalf.
</p>
          </StepContent>
        </Step>

        <Step>
          <StepIcon>
            <FaUniversity />
          </StepIcon>
          <StepContent>
            <StepNumber>2</StepNumber>
            <h3>ACCEPT AN ADMISSION OFFER</h3>
            <p>We will advise and assist you in choosing the most suitable offer and meeting any conditions of these offers to get you to the next step of the process..</p>
          </StepContent>
        </Step>

        <Step>
          <StepIcon>
            <FaFileSignature />
          </StepIcon>
          <StepContent>
            <StepNumber>3</StepNumber>
            <h3>MAKE PAYMENT FOR YOUR FEES</h3>
            <p>We streamline the payment process to enable you make deposits in due time. Once your payment has been wired into the university’s bank account, we will assist you with the provision of required maintenance documents and undergo a satisfactory interview by the university Compliance Team.</p>
          </StepContent>
        </Step>

        <Step>
          <StepIcon>
            <FaPlaneDeparture />
          </StepIcon>
          <StepContent>
            <StepNumber>4</StepNumber>
            <h3>START YOUR VISA APPLICATION</h3>
            <p>All international students need a visa to study abroad. Please note that if you’re coming from the European Union or European Economic Association (EEA) countries, you won’t need a visa for the destinations within. These universities will issue the necessary documentation to assist students in obtaining entry clearance to the study destination.</p>
          </StepContent>
        </Step>

        <Step>
          <StepIcon>
            <FaCheckCircle />
          </StepIcon>
          <StepContent>
            <StepNumber>5</StepNumber>
            <h3>ARRIVE IN YOUR DREAM UNIVERSITY</h3>
            <p>Finally, we assist you to make your arrival at your preferred destination effortless.
We provide you with flight arrangements and airport pick-up services.
We help you secure comfortable accommodation at your destination.
We guide you to get access to local amenities.
</p>
          </StepContent>
        </Step>
      </StepsContainer>
    </ProcessContainer>
  );
};

// Styled Components
const ProcessContainer = styled.section`
  background: #f8f9fa;
  padding: 80px 10%;
  text-align: center;

  @media(max-width:428px){
    padding:80px 3%;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #ff6600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 50px;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 900px;
  margin: auto;
`;

const Step = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StepIcon = styled.div`
  font-size: 2.5rem;
  color: #ff6600;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const StepContent = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const StepNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ff6600;
`;

export default OurProcess;
