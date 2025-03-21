


import React from "react";
import styled from "styled-components";
import im1 from "../Images/im1.jpeg";
import im2 from "../Images/im2.jpg";
import im4 from "../Images/im4.png";
import im5 from "../Images/im5.png";
import im6 from "../Images/im6.jpg";
import im7 from "../Images/im7.png";
import im8 from "../Images/im8.JPG";
import im9 from "../Images/im9.jpg";
import im10 from "../Images/im10.png";
import im11 from "../Images/im11.jpg";
import im12 from "../Images/im12.png";
import im13 from "../Images/im13.jpg";
import im14 from "../Images/im14.png";
import im15 from "../Images/im15.jpg";
import im16 from "../Images/im16.png";
import im17 from "../Images/im17.jpg";
import im18 from "../Images/im18.png";
import im19 from "../Images/im19.jpg";
import im20 from "../Images/im20.png";
import im21 from "../Images/im21.jpg";
import im22 from "../Images/im22.png";
import im23 from "../Images/im23.jpg";
import im24 from "../Images/im24.png";
import im25 from "../Images/im25.jpg";
import im26 from "../Images/im26.jpg";
import im27 from "../Images/im27.jpg";
import im28 from "../Images/im28.jpg";
import im29 from "../Images/im29.jpg";
import im30 from "../Images/im30.jpg";
import im31 from "../Images/im31.jpg";
import im32 from "../Images/im32.jpg";
import im33 from "../Images/im33.jpg";
import im34 from "../Images/im34.jpg";
import im35 from "../Images/im35.jpg";
import im36 from "../Images/im36.jpg";
import im37 from "../Images/im37.jpg";

// Image Array
const images = [
  im1, im2, im6, im7, im8, im9, im10,
  im11, im12, im13, im15, im16, im17, im18, im19, im20,
  im21, im22, im23, im24, im25, im26, im27, im28, im29, im30,
  im31, im32, im33, im34, im35, im36, im37
];

const ArtisticGallery = () => {
  return (
    <GallerySection>
      <h2>🖼️ Wall Gallery</h2>
      <GalleryGrid>
        {images.map((src, index) => (
          <Frame key={index} className={`size-${index % 5}`}>
            <img src={src} alt={`Framed Photo ${index + 1}`} />
          </Frame>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

// Styled Components
const GallerySection = styled.section`
  text-align: center;
  padding: 60px 10%;
  background: #e6dfd5; /* Warm wallpaper-like background */
  position: relative;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
  }
  
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 10%;
    width: 80%;
    height: 10px;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  padding: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Frame Effect
const Frame = styled.div`
//   background: #8B5A2B; /* Wooden brown frame */
// background:rgba(0,0,255,0.3);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.3);
  position: relative;


  /* Animated Background */
  background: linear-gradient(45deg, #5D3A1A, #C4A484, #004B49, #D4AF37, #800020);
  background-size: 400% 400%;
  animation: colorChange 2s infinite alternate ease-in-out;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 4px;
    border: 3px solid #fff; /* White mat inside the frame */
    transition: transform 0.4s ease-in-out;
  }

  &:hover {
    transform: scale(1.05);
  }

  /* Add random tilt for natural hanging effect */
  &:nth-child(odd) {
    transform: rotate(-2deg);
  }

  &:nth-child(even) {
    transform: rotate(3deg);
  }


    @keyframes colorChange {
    0% { background-position: 0% 50%; }
    25% { background-position: 25% 75%; }
    50% { background-position: 50% 100%; }
    75% { background-position: 75% 25%; }
    100% { background-position: 100% 50%; }
  }

  /* Custom size variation */
  &.size-0 { grid-column: span 2; grid-row: span 2; }
  &.size-1 { grid-column: span 1; grid-row: span 1; }
  &.size-2 { grid-column: span 2; grid-row: span 1; }
  &.size-3 { grid-column: span 1; grid-row: span 2; }
  &.size-4 { grid-column: span 1; grid-row: span 1; }
`;

export default ArtisticGallery;

