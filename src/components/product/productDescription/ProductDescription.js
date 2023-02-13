import React from 'react';
import {
  CompanyParagraph,
  ProductTitle,
  Wrapper,
  Paragraph,
  PriceBoxWrapper,
  OldPriceParagraph,
  PriceParagraph,
  QuantityWrapper,
  ActionsWrapper,
  QuantityParagraph,
  Button,
  AddChartButton,
} from './ProductDescription.styled';

import { ReactComponent as CartIcon } from '../../../images/icon-cart.svg';

import { useAppContext } from '../../../hooks/useContext';
import { priceFormat } from '../../helpers';

const ProductDescription = () => {
  const {
    quantity,
    data,
    handleQuantityAdd,
    handleQuantityRemove,
    handlerAddToCart,
  } = useAppContext();

  const {
    id,
    price,
    isDiscount,
    disscount,
    priceBefore,
    name,
    desc,
    companyName,
  } = data[0];

  return (
    <Wrapper>
      <CompanyParagraph>{companyName}</CompanyParagraph>
      <ProductTitle>{name}</ProductTitle>
      <Paragraph>{desc}</Paragraph>
      <PriceBoxWrapper>
        <PriceParagraph>
          {priceFormat(price)} {isDiscount && <span>{disscount}%</span>}
        </PriceParagraph>
        {isDiscount && (
          <OldPriceParagraph>{priceFormat(priceBefore)}</OldPriceParagraph>
        )}
      </PriceBoxWrapper>
      <ActionsWrapper>
        <QuantityWrapper>
          <Button onClick={handleQuantityRemove}>-</Button>
          <QuantityParagraph>{quantity}</QuantityParagraph>
          <Button onClick={handleQuantityAdd}>+</Button>
        </QuantityWrapper>
        <AddChartButton onClick={() => handlerAddToCart(data[0])}>
          <CartIcon />
          Add to cart
        </AddChartButton>
      </ActionsWrapper>
    </Wrapper>
  );
};

export default ProductDescription;
