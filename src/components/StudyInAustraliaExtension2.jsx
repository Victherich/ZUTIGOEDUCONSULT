import React from 'react';
import styled from 'styled-components';
import StudyInAustralia from './StudyInAustralia';
import aust1 from '../Images/aust1.jpg';    
import aust2 from '../Images/aust2.png';
import aust3 from '../Images/aust3.jpg';
import aust4 from '../Images/aust4.jpg';
import aust5 from '../Images/aust5.jpg';
import aust6 from '../Images/aust6.jpg';
import aust7 from '../Images/aust7.jpg';
import aust8 from '../Images/aust8.jpg';
import aust9 from '../Images/aust9.jpg';

const GalleryWrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;


  
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* or 'contain' if no cropping is preferred */
`;

const StudyInAustraliaExtension2 = () => {

    const images = [
        { src: aust1, alt: 'Image 1' },
        { src: aust2, alt: 'Image 2' },
        { src: aust3, alt: 'Image 3' },
        { src: aust4, alt: 'Image 4' },
        { src: aust5, alt: 'Image 5' },
        { src: aust6, alt: 'Image 6' },
        { src: aust7, alt: 'Image 7' },
        { src: aust8, alt: 'Image 8' },
        { src: aust9, alt: 'Image 9' },
      ];


  return (
    <GalleryWrapper>
      {images.map((img, index) => (
        <ImageContainer key={index}>
          <StyledImage src={img.src} alt={img.alt || `image-${index}`} />
        </ImageContainer>
      ))}
    </GalleryWrapper>
  );
};

export default StudyInAustraliaExtension2;
