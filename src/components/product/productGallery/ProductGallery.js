import React, { useState, useEffect } from 'react';

import image1 from '../../../images/image-product-1.jpg';
import image2 from '../../../images/image-product-2.jpg';
import image3 from '../../../images/image-product-3.jpg';
import image4 from '../../../images/image-product-4.jpg';

import thumbImage1 from '../../../images/image-product-1.jpg';
import thumbImage2 from '../../../images/image-product-2.jpg';
import thumbImage3 from '../../../images/image-product-3.jpg';
import thumbImage4 from '../../../images/image-product-4.jpg';

import { ReactComponent as CloseIcon } from '../../../images/icon-close.svg';

import { ReactComponent as LeftIcon } from '../../../images/icon-previous.svg';
import { ReactComponent as RightIcon } from '../../../images/icon-next.svg';

import {
  ArrowWrapper,
  BigImage,
  BigImageWrapper,
  ImagesGalleryWrapper,
  Img,
  LightBoxCloseButton,
  LightBoxContentWrapper,
  LightboxImagesWrapper,
  LightBoxImageWrapper,
  LightboxImg,
  LightBoxWrapper,
  Wrapper,
} from './ProductGallery.styled';
import MobileGallery from '../mobileGallery/MobileGallery';

const images = [
  { id: 0, img: image1, thumb: thumbImage1 },
  { id: 1, img: image2, thumb: thumbImage2 },
  { id: 2, img: image3, thumb: thumbImage3 },
  { id: 3, img: image4, thumb: thumbImage4 },
];

const ProductGallery = () => {
  const [active, setActive] = useState(0);
  const [activeLightbox, setActiveLightbox] = useState(active);
  const [openGallery, setOpenGallery] = useState(false);

  useEffect(() => {
    setActiveLightbox(active);
  }, [active]);

  const handleSlider = (direction) => {
    console.log(direction);

    if (direction === 'right') {
      setActiveLightbox((prevState) => prevState + 1);

      if (activeLightbox === images.length - 1) {
        setActiveLightbox(0);
      }
    }

    if (direction === 'left') {
      setActiveLightbox((prevState) => prevState - 1);

      if (activeLightbox === 0) {
        setActiveLightbox(images.length - 1);
      }
    }
  };

  return (
    <>
      <Wrapper>
        <BigImageWrapper>
          <MobileGallery />
          <BigImage
            onClick={() => setOpenGallery(true)}
            src={images[active].img}
            alt="big-image"
          />
        </BigImageWrapper>
        <ImagesGalleryWrapper>
          {images.map((img) => {
            return (
              <Img
                className={`${active === img.id ? 'active' : null}`}
                key={img.id}
                src={img.thumb}
                alt={img.id}
                onClick={() => setActive(img.id)}
              />
            );
          })}
        </ImagesGalleryWrapper>
      </Wrapper>

      {openGallery && (
        <LightBoxWrapper>
          <LightBoxContentWrapper>
            <LightBoxCloseButton onClick={() => setOpenGallery(false)}>
              <CloseIcon />
            </LightBoxCloseButton>
            <LightBoxImageWrapper>
              <ArrowWrapper
                onClick={() => handleSlider('left')}
                direction="left"
              >
                <LeftIcon />
              </ArrowWrapper>
              <LightboxImg
                src={images[activeLightbox].img}
                alt="active-image"
              />
              <ArrowWrapper
                onClick={() => handleSlider('right')}
                direction="right"
              >
                <RightIcon />
              </ArrowWrapper>
            </LightBoxImageWrapper>

            <LightboxImagesWrapper>
              {images.map((img) => {
                return (
                  <Img
                    className={`${activeLightbox === img.id ? 'active' : null}`}
                    key={img.id}
                    src={img.thumb}
                    alt={img.id}
                    onClick={() => setActiveLightbox(img.id)}
                  />
                );
              })}
            </LightboxImagesWrapper>
          </LightBoxContentWrapper>
        </LightBoxWrapper>
      )}
    </>
  );
};

export default ProductGallery;
