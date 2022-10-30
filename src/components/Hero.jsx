import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { FaBinoculars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  max-height: 1200px;
`;
const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    opacity: 0.7;
    overflow: hidden;
    z-index: 2;
  }
`;
const HeroImage = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  width: calc(100%-100px);
  max-width: 1600px;

  h1 {
    font-family: "Oswald", sans-serif;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-transform: uppercase;
  }
`;
const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 10;
  display: flex;
`;
const ArrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  margin-right: 1rem;
  border-radius: 50%;
  transition: 0.3s;
  background: #000;

  &:hover {
    transform: scale(1.05);
  }
`;
const PrevArrow = styled(IoMdArrowBack)`
  ${ArrowButtons}
`;
const NextArrow = styled(IoMdArrowForward)`
  ${ArrowButtons}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const lenght = slides.length;

  const timeOut = useRef(null);
  const nextSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };
  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === lenght - 1 ? 0 : current + 1);
    };
    timeOut.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    };
  }, [current, lenght]);
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent className="prose prose-lsm md:prose-lg text-gray-100 flex flex-col">
                    <h1 className="text-gray-100 font-light">{slide.title}</h1>
                    <Link to={slide.path}>
                      <button
                        className="bg-gray-700 hover:bg-yellow-600 text-white font-thin py-2 px-4 rounded inline-flex items-center text-sm"
                        css={`
                          max-width: 200px;
                        `}
                      >
                        <FaBinoculars className="mr-4" />
                        {slide.label}
                      </button>
                    </Link>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow className="hover:bg-yellow-600" onClick={prevSlide} />
          <NextArrow className="hover:bg-yellow-600" onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
