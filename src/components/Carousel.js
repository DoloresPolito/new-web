import { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
  ${props => props.direction === 'prev' ? 'left: 0;' : 'right: 0;'}
`;

const Scrollbar = styled.div`
  width: 30%;
  height: 4px;
  background-color: #ccc;
`;

const ScrollbarIndicator = styled.div`
  width: ${props => props.width}%;


  height: 100%;
  background-color: #007bff;
  transition: width 0.3s ease; /* Transición suave en la propiedad width */
`;

const items = [1, 2, 3, 4, 5]; // Tus elementos del carrusel

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, items.length - 1));
  };

  return (
    <CarouselContainer>
      <ArrowButton onClick={handlePrev} direction="prev">{'<'}</ArrowButton>
      <CarouselTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <CarouselItem key={index}>{/* Contenido del carrusel */}</CarouselItem>
        ))}
      </CarouselTrack>
      <ArrowButton onClick={handleNext} direction="next">{'>'}</ArrowButton>
      <Scrollbar>
        <ScrollbarIndicator width={(currentIndex + 1) / items.length * 100} />
      </Scrollbar>
    </CarouselContainer>
  );
};

export default Carousel;