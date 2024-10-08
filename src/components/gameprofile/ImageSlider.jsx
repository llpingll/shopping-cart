import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  let length = 0;

  if (slides) {
    length = slides.length;
  }

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
  }

  & img {
    object-fit: cover;
    border-radius: 5rem;
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

ImageSlider.propTypes = {
  slides: PropTypes.array,
};

export default ImageSlider;
