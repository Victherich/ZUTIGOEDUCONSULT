import React, { useRef, useState } from "react";
import styled from "styled-components";
import video1 from "../Images/im39.mp4";
import video2 from "../Images/im38.mp4";

const ArtisticVideoPlayer = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [playing1, setPlaying1] = useState(false);
  const [playing2, setPlaying2] = useState(false);

  const togglePlay = (videoRef, setPlaying, playing) => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <VideoSection>
      <Title>🎥 Frames of Inspiration</Title>
      <Subtitle>Two perspectives, one journey—watch, reflect, and be inspired.</Subtitle>
      <VideoContainer>
        <VideoWrapper>
          <Video ref={videoRef1} src={video1} loop />
          <PlayButton onClick={() => togglePlay(videoRef1, setPlaying1, playing1)}>
            {playing1 ? "⏸ Pause" : "▶ Play"}
          </PlayButton>
        </VideoWrapper>

        <VideoWrapper>
          <Video ref={videoRef2} src={video2} loop />
          <PlayButton onClick={() => togglePlay(videoRef2, setPlaying2, playing2)}>
            {playing2 ? "⏸ Pause" : "▶ Play"}
          </PlayButton>
        </VideoWrapper>
      </VideoContainer>
    </VideoSection>
  );
};

// Styled Components
const VideoSection = styled.section`
  text-align: center;
  padding: 60px 5%;
  background: linear-gradient(to right, #1e1e1e, #3a3a3a);
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 30px;
`;

const VideoContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 45%;
  max-width: 500px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Video = styled.video`
  width: 100%;
  display: block;
  border-radius: 15px;
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    color: black;
  }
`;

export default ArtisticVideoPlayer;
