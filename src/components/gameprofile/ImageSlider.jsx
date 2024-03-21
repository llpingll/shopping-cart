import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <SliderContainer>
      <StyledArrowBack onClick={prevSlide} />
      <StyledArrowForward onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide.image} className="image" />}
          </div>
        );
      })}
    </SliderContainer>
  );
};

const SliderContainer = styled.section`
  min-width: 70%;
  position: relative;
  font-size: 5rem;

  & .active {
    height: 100%;
    /* border: 2px green solid; */
  }

  & img {
    object-fit: cover;
    border-radius: 5rem;
    /* border: 2px red solid; */
    height: 100%;
  }
`;

const StyledArrowBack = styled(IoIosArrowBack)`
  position: absolute;
  cursor: pointer;
  height: 100%;
`;

const StyledArrowForward = styled(IoIosArrowForward)`
  position: absolute;
  right: 0;
  height: 100%;
  cursor: pointer;
`;

export default ImageSlider;
