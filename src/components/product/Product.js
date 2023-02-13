import React from 'react';
import ProductGallery from './productGallery/ProductGallery';
import { Wrapper } from './Product.styled';
import ProductDescription from './productDescription/ProductDescription';

const Product = () => {
  return (
    <Wrapper>
      <ProductGallery />
      <ProductDescription />
    </Wrapper>
  );
};

export default Product;
