import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Import Images
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
import gl1 from '../Images/gl1.jpg'

// Store all images in an array
const images = [ im2, im4, im6, im7, im8, im9, im10, im11, im12, im13, im14, im15, im16, im17,
  im18, im19, im20, im21, im22, im23, im24, im25, im26, im27, im28, im29, im30, im31, im32,
  im33, im34, im35, im36, im37
];

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <GalleryContainer>
      {/* Hero Section */}
      <HeroSection>
        <h1>Explore Our Stunning Gallery</h1>
        {/* <p>Take a look at our amazing collection of images showcasing our services and impact.</p> */}
        {/* <HeroButton onClick={() => navigate("/contactus")}>Contact Us</HeroButton> */}
      </HeroSection>

      {/* Gallery Grid */}
      <p style={{padding:"10px", fontStyle:"italic", color:"rgba(0,0,255,0.9)"}}>(Click an image to Expand)</p>
      <GalleryGrid>
        {images.map((img, index) => (
          <GalleryItem key={index} onClick={() => setSelectedImage(img)}>
            <img src={img} alt={`Gallery Image ${index + 1}`} />
          </GalleryItem>
        ))}
      </GalleryGrid>

      {/* Lightbox - Enlarged Image View */}
      {selectedImage && (
        <Lightbox onClick={() => setSelectedImage(null)}>
          <LightboxImage src={selectedImage} alt="Enlarged View" />
        </Lightbox>
      )}
    </GalleryContainer>
  );
};

// Styled Components
const GalleryContainer = styled.div`
  text-align: center;
  background-color: #f5f5f5;
`;

const HeroSection = styled.div`
  background: url(${gl1 }) no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6);
}


  p {
    font-size: 1.5rem;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

const HeroButton = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 1.2rem;
  color: white;
  background: #ff9900;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #cc7700;
    transform: scale(1.05);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  padding: 40px 20px;
`;

const GalleryItem = styled.div`
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

// Lightbox Styling
const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
`;

export default GalleryPage;
