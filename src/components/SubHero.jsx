// import React from "react";
// import styled from "styled-components";
// import image2 from '../Images/image 2.jpg'

// const SubHero = () => {
//   return (
//     <HeroContainer>
//       {/* Top Sine Wave */}
//       <WaveTop xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//         <path
//           fill="#fff"
//           fillOpacity="1"
//           d="M0,96L48,101.3C96,107,192,117,288,128C384,139,480,149,576,149.3C672,149,768,139,864,122.7C960,107,1056,85,1152,85.3C1248,85,1344,107,1392,117.3L1440,128V0H0Z"
//         ></path>
//       </WaveTop>

//       {/* Hero Content */}
//       <HeroContent>
//         <h1>Empowering Your Educational Dreams</h1>
//         <p>We provide world-class education consultancy services to help you achieve your academic and career goals.</p>
//         <HeroButton>Get Started</HeroButton>
//       </HeroContent>

//       {/* Bottom Sine Wave */}
//       <WaveBottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//         <path
//           fill="#fff"
//           fillOpacity="1"
//           d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,149.3C672,160,768,192,864,213.3C960,235,1056,245,1152,245.3C1248,245,1344,235,1392,229.3L1440,224V320H0Z"
//         ></path>
//       </WaveBottom>
//     </HeroContainer>
//   );
// };

// // Styled Components
// const HeroContainer = styled.div`
//   position: relative;
//   text-align: center;
//   color: white;
//   background: url(${image2}) center/cover no-repeat;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 50px;
//   overflow: hidden;
// `;

// const HeroContent = styled.div`
//   max-width: 800px;
//   padding: 20px;

//   h1 {
//     font-size: 2.8rem;
//     font-weight: bold;
//     margin-bottom: 10px;
//   }

//   p {
//     font-size: 1.2rem;
//     margin-bottom: 20px;
//   }

//   @media (max-width: 768px) {
//     h1 {
//       font-size: 2rem;
//     }

//     p {
//       font-size: 1rem;
//     }
//   }
// `;

// const HeroButton = styled.button`
//   background: #ff7f50;
//   color: white;
//   padding: 12px 25px;
//   font-size: 1.2rem;
//   border: none;
//   border-radius: 30px;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background: #e76a3c;
//   }
// `;

// const WaveTop = styled.svg`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: auto;
// `;

// const WaveBottom = styled.svg`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: auto;
// `;

// export default SubHero;



import React from "react";
import styled from "styled-components";
import image2 from "../Images/im6.jpg";
import { useNavigate } from "react-router-dom";

const SubHero = () => {

    const navigate = useNavigate()
  return (
    <HeroContainer style={{ backgroundImage: `url(${image2})` }}>
      {/* Top Sine Wave */}
      <WaveTop xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,101.3C96,107,192,117,288,128C384,139,480,149,576,149.3C672,149,768,139,864,122.7C960,107,1056,85,1152,85.3C1248,85,1344,107,1392,117.3L1440,128V0H0Z"
        ></path>
      </WaveTop>

      {/* Hero Content */}
      <HeroContent>
        <h1>Empowering Your Educational Dreams</h1>
        <p>We provide world-class education consultancy services to help you achieve your academic and career goals.</p>
        <HeroButton onClick={()=>navigate('/contactus')}>Get Started</HeroButton>
      </HeroContent>

      {/* Bottom Sine Wave */}
      <WaveBottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,149.3C672,160,768,192,864,213.3C960,235,1056,245,1152,245.3C1248,245,1344,235,1392,229.3L1440,224V320H0Z"
        ></path>
      </WaveBottom>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media(max-width:428px){
    padding:10px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const HeroButton = styled.button`
  background: #ff7f50;
  color: white;
  padding: 12px 25px;
  font-size: 1.2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
  position:relative;
  z-index:999;

  &:hover {
    background: #e76a3c;
  }
`;

const WaveTop = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const WaveBottom = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

export default SubHero;

