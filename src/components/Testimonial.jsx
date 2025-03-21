import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "Zutigo EduConsult made my dream of studying abroad a reality. Their support and guidance were invaluable!",
    name: "Sarah Johnson",
    position: "International Student",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: "Their expertise in the admission process is unmatched. Highly recommended for anyone seeking higher education abroad.",
    name: "Michael Lee",
    position: "University Applicant",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    quote: "Professional, reliable, and extremely helpful! They simplified the entire process for me.",
    name: "Emily Davis",
    position: "Graduate Student",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <TestimonialSection>
      <h2>What Our Clients Say</h2>
      <SliderContainer>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteIconLeft><FaQuoteLeft /></QuoteIconLeft>
              <p>{testimonial.quote}</p>
              <QuoteIconRight><FaQuoteRight /></QuoteIconRight>
              <Profile>
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.position}</span>
                </div>
              </Profile>
            </Testimonial>
          ))}
        </Slider>
      </SliderContainer>
    </TestimonialSection>
  );
};

// Styled Components
const TestimonialSection = styled.section`
  text-align: center;
  padding: 80px 10%;
  background: #f8f8f8;
`;

const SliderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Testimonial = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
  font-size: 1.2rem;
  color: #444;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const QuoteIconLeft = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 2rem;
  color: #ff6600;
`;

const QuoteIconRight = styled.div`
  position: absolute;
  bottom: -10px;
  right: 10px;
  font-size: 2rem;
  color: #ff6600;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid #ff6600;
  }

  h4 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  span {
    font-size: 0.9rem;
    color: #777;
  }
`;

export default TestimonialCarousel;
