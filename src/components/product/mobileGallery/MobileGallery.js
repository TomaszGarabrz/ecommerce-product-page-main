import React from 'react';
import { ArrowWrapper, Img, Wrapper } from './MobileGallery.styled';

import image1 from '../../../images/image-product-1.jpg';
import image2 from '../../../images/image-product-2.jpg';
import image3 from '../../../images/image-product-3.jpg';
import image4 from '../../../images/image-product-4.jpg';

import { ReactComponent as LeftIcon } from '../../../images/icon-previous.svg';
import { ReactComponent as RightIcon } from '../../../images/icon-next.svg';
import { useState } from 'react';

const images = [
  { id: 0, img: image1 },
  { id: 1, img: image2 },
  { id: 2, img: image3 },
  { id: 3, img: image4 },
];

const MobileGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleArrow = (direction) => {
    if (direction === 'left') {
      setCurrentSlide((prevState) => prevState - 1);

      if (currentSlide === 0) {
        setCurrentSlide(images.length - 1);
      }
    }

    if (direction === 'right') {
      setCurrentSlide((prevState) => prevState + 1);

      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      }
    }
  };

  console.log(currentSlide);

  return (
    <Wrapper>
      {images.map((image) => {
        return (
          <Img
            currentSlide={currentSlide}
            key={image.id}
            src={image.img}
            alt={`img-${image.id}`}
          />
        );
      })}
      <ArrowWrapper onClick={() => handleArrow('left')} left>
        <LeftIcon />
      </ArrowWrapper>
      <ArrowWrapper onClick={() => handleArrow('right')} right>
        <RightIcon />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default MobileGallery;
