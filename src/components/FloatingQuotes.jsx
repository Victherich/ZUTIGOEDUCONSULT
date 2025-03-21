

// import React, { useEffect, useState } from "react";
// import styled, { keyframes } from "styled-components";

// // Array of inspirational study abroad quotes
// const quotes = [
//   "The world is a book, and those who do not travel read only one page. – St. Augustine",
//   "Study abroad expands your horizons and opens new doors to the future.",
//   "Not all classrooms have four walls.",
//   "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
//   "Adventure is the best way to learn.",
//   "Traveling—it leaves you speechless, then turns you into a storyteller.",
//   "To travel is to live. – Hans Christian Andersen",
//   "Dream big, study hard, explore the world!",
// ];

// // Function to generate a random position and animation delay
// const generateQuotes = () => {
//   return quotes.map((quote, index) => ({
//     id: index,
//     text: quote,
//     top: `${Math.random() * 80}vh`,
//     left: `${Math.random() * 80}vw`,
//     animationDuration: `${5 + Math.random() * 5}s`,
//   }));
// };

// const FloatingQuotes = () => {
//   const [floatingQuotes, setFloatingQuotes] = useState([]);

//   useEffect(() => {
//     setFloatingQuotes(generateQuotes());
//   }, []);

//   return (
//     <QuotesContainer>
//       {floatingQuotes.map(({ id, text, top, left, animationDuration }) => (
//         <FloatingQuote key={id} style={{ top, left, animationDuration }}>
//           {text}
//         </FloatingQuote>
//       ))}
//     </QuotesContainer>
//   );
// };

// // Keyframe animation for floating effect
// const float = keyframes`
//   0% { transform: translateY(0) translateX(0); }
//   50% { transform: translateY(-20px) translateX(10px); }
//   100% { transform: translateY(0) translateX(0); }
// `;

// // Styled Components
// const QuotesContainer = styled.div`
//   position: relative;
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
//   background: linear-gradient(135deg, #ff9a9e, #fad0c4);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const FloatingQuote = styled.div`
//   position: absolute;
//   font-size: 1.2rem;
//   font-weight: bold;
//   color: white;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 10px 15px;
//   border-radius: 10px;
//   max-width: 300px;
//   text-align: center;
//   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
//   animation: ${float} infinite ease-in-out alternate;
// `;

// export default FloatingQuotes;


import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import backgroundVideo from "../Images/im3.mp4"; // Add your video file

// Array of inspirational study abroad quotes
const quotes = [
  "The world is a book, and those who do not travel read only one page. – St. Augustine",
  "Study abroad expands your horizons and opens new doors to the future.",
  "Not all classrooms have four walls.",
  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  "Adventure is the best way to learn.",
  "Traveling—it leaves you speechless, then turns you into a storyteller.",
  "To travel is to live. – Hans Christian Andersen",
  "Dream big, study hard, explore the world!",
];

// Function to generate random positions and speeds for quotes
const generateQuotes = () => {
  return quotes.map((quote, index) => ({
    id: index,
    text: quote,
    top: `${Math.random() * 80}vh`,
    left: `${Math.random() * 80}vw`,
    animationDuration: `${2 + Math.random() * 3}s`, // Faster movement
  }));
};

const FloatingQuotes = () => {
  const [floatingQuotes, setFloatingQuotes] = useState([]);

  useEffect(() => {
    setFloatingQuotes(generateQuotes());
  }, []);

  return (
    <QuotesContainer>
      {/* Background Video */}
      <VideoBackground autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </VideoBackground>

      {/* Floating Quotes */}
      {floatingQuotes.map(({ id, text, top, left, animationDuration }) => (
        <FloatingQuote key={id} style={{ top, left, animationDuration }}>
          {text}
        </FloatingQuote>
      ))}
    </QuotesContainer>
  );
};

// Keyframe animation for faster floating effect
const float = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 0.8; }
  50% { transform: translateY(-30px) translateX(15px); opacity: 1; }
  100% { transform: translateY(0) translateX(0); opacity: 0.8; }
`;

// Styled Components
const QuotesContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const FloatingQuote = styled.div`
  position: absolute;
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 15px 20px;
  border-radius: 12px;
  max-width: 350px;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  animation: ${float} infinite ease-in-out alternate;
`;

export default FloatingQuotes;

