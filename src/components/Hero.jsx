// import React from "react";
// import styled from "styled-components";
// import heroBackground from "../Images/im35.jpg"; // Import your background image
// import { useNavigate } from "react-router-dom";

// const Hero = () => {

//     const navigate = useNavigate();
    
//   return (
//     <HeroContainer>
//       <HeroOverlay>
//         <HeroContent>
//           <h1>Unlock Global Education Opportunities</h1>
//           <p>
//             At Zutigo EduConsult, we guide you in choosing the right path for
//             your academic and career success abroad.
//           </p>
//           <HeroButton onClick={()=>navigate('/contactus')}>Get Started</HeroButton>
//         </HeroContent>
//       </HeroOverlay>

//       {/* Sine Wave Bottom */}
//       <WaveContainer>
//         <svg
//           viewBox="0 0 1440 320"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#ffffff"
//             fillOpacity="1"
//             d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L0,320Z"
//           ></path>
//         </svg>
//       </WaveContainer>
//     </HeroContainer>
//   );
// };

// // Styled Components
// const HeroContainer = styled.section`
//   background: url(${heroBackground}) no-repeat center center/cover;
//   color: white;
//   text-align: center;
//   position: relative;
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const HeroOverlay = styled.div`
//   background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0 20px;
// `;

// const HeroContent = styled.div`
//   max-width: 800px;

//   h1 {
//     font-size: 3.5rem;
//     font-weight: bold;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 1.3rem;
//     line-height: 1.6;
//     margin-bottom: 30px;
//   }

//   @media (max-width: 768px) {
//     h1 {
//       font-size: 2.5rem;
//     }
//     p {
//       font-size: 1rem;
//     }
//   }
// `;

// const HeroButton = styled.a`
//   display: inline-block;
//   padding: 15px 35px;
//   font-size: 1.3rem;
//   font-weight: bold;
//   color: white;
//   background: #ffcc00;
//   border-radius: 30px;
//   text-decoration: none;
//   transition: 0.3s ease-in-out;
//   cursor:pointer;

//   &:hover {
//     background: #ffaa00;
//     transform: scale(1.05);
//   }
// `;

// const WaveContainer = styled.div`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   overflow: hidden;
//   line-height: 0;

//   svg {
//     position: relative;
//     display: block;
//     width: 100%;
//     height: 120px;
//   }
// `;

// export default Hero;




// #############################################################################################333333333
// import React, { useState, useEffect } from "react";
// import styled, { keyframes } from "styled-components";
// import { useNavigate } from "react-router-dom";

// // Import multiple images for sliding
// import heroImg1 from "../Images/im35.jpg";
// import heroImg2 from "../Images/im27.jpg";
// import heroImg3 from "../Images/im33.jpg";
// import heroImg4 from "../Images/im6.jpg";
// import heroImg5 from "../Images/im15.jpg";

// const images = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

// const Hero = () => {
//   const navigate = useNavigate();
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 4000); // Change image every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <HeroContainer>
//       <HeroImage image={images[currentImage]} key={currentImage} />
//       <HeroOverlay>
//         <HeroContent>
//           <h1>Unlock Global Education Opportunities</h1>
//           <p>
//             At Zutigo EduConsult, we guide you in choosing the right path for
//             your academic and career success abroad.
//           </p>
//           <HeroButton onClick={() => navigate("/contactus")}>Get Started</HeroButton>
//         </HeroContent>
//       </HeroOverlay>

//       {/* Sine Wave Bottom */}
//       <WaveContainer>
//         <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//           <path
//             fill="#ffffff"
//             fillOpacity="1"
//             d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L0,320Z"
//           ></path>
//         </svg>
//       </WaveContainer>
//     </HeroContainer>
//   );
// };

// // Animation for sliding in from the right
// const slideIn = keyframes`
//   from {
//     transform: translateX(100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;

// const HeroContainer = styled.section`
//   position: relative;
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;

// `;

// const HeroImage = styled.div`
//   background: url(${(props) => props.image}) no-repeat center center/cover;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   animation: ${slideIn} 1.5s ease-in-out;
// `;

// const HeroOverlay = styled.div`
//   background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
//   width: 100%;
//   height: 60%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0 20px;
//   position: absolute;
// `;

// const HeroContent = styled.div`
//   max-width: 800px;
//   text-align: center;
//   color: white;

//   h1 {
//     font-size: 3.5rem;
//     font-weight: bold;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 1.3rem;
//     line-height: 1.6;
//     margin-bottom: 30px;
//   }

//   @media (max-width: 768px) {
//     h1 {
//       font-size: 2.5rem;
//     }
//     p {
//       font-size: 1rem;
//     }
//   }
// `;

// const HeroButton = styled.a`
//   display: inline-block;
//   padding: 15px 35px;
//   font-size: 1.3rem;
//   font-weight: bold;
//   color: white;
//   background: #ffcc00;
//   border-radius: 30px;
//   text-decoration: none;
//   transition: 0.3s ease-in-out;
//   cursor: pointer;

//   &:hover {
//     background: #ffaa00;
//     transform: scale(1.05);
//   }
// `;

// const WaveContainer = styled.div`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   overflow: hidden;
//   line-height: 0;

//   svg {
//     position: relative;
//     display: block;
//     width: 100%;
//     height: 120px;
//   }
// `;

// export default Hero;




import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

// Import multiple images for sliding
import heroImg1 from "../Images/im35.jpg";
import heroImg2 from "../Images/im27.jpg";
import heroImg3 from "../Images/im33.jpg";
import heroImg4 from "../Images/im6.jpg";
import heroImg5 from "../Images/im15.jpg";

const images = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(images.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage); // Store the previous image index
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <HeroContainer>
      {/* Image Wrapper for Smooth Sliding Effect */}
      <ImageWrapper>
        {images.map((image, index) => (
          <HeroImage
            key={index}
            image={image}
            isActive={index === currentImage}
            isPrevious={index === prevImage}
          />
        ))}
      </ImageWrapper>

      <HeroOverlay>
        <HeroContent>
          <h1>Unlock Global Education Opportunities</h1>
          <p>
            At Zutigo EduConsult, we guide you in choosing the right path for
            your academic and career success abroad.
          </p>
          <HeroButton onClick={() => navigate("/application")}>
            Apply Now
          </HeroButton>
        </HeroContent>
      </HeroOverlay>

      {/* Sine Wave Bottom */}
      <WaveContainer>
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </WaveContainer>
    </HeroContainer>
  );
};

// **Sliding Animation**
const HeroContainer = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// **Image Styling with Sliding Effect**
const HeroImage = styled.div`
  background: url(${(props) => props.image}) no-repeat center center/cover;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;

  ${({ isActive, isPrevious }) =>
    isActive
      ? `transform: translateX(0);` // Active image slides into place
      : isPrevious
      ? `transform: translateX(-100%);` // Previous image slides out to the left
      : `transform: translateX(100%);`} // Next image waits in the right
`;

const HeroOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: absolute;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  color: white;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 15px 35px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background: #ffcc00;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #ffaa00;
    transform: scale(1.05);
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: 100%;
    height: 120px;
  }
`;

export default Hero;
