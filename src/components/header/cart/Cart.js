import React from 'react';
import {
  Button,
  ButtonWrapper,
  CartIconWrapper,
  CartInner,
  CartPriceWrapper,
  CartProductName,
  CartProductPrice,
  CartTitle,
  CartTop,
  Img,
  Underline,
  Wrapper,
} from './Cart.styled';

import productAvatar from '../../../images/image-product-1-thumbnail.jpg';
import trashIcon from '../../../images/icon-delete.svg';

import { useAppContext } from '../../../hooks/useContext';
import { priceFormat } from '../../helpers';

const Cart = () => {
  const { data, cart, setCart, setData, handlerDeleteCartItem } =
    useAppContext();

  let sumOfCart = 1;

  if (cart.length > 0) {
    sumOfCart = cart.reduce((a, b) => {
      return a + b.price * b.inCart;
    }, 0);
  }

  return (
    <Wrapper>
      <CartTitle>Cart</CartTitle>
      <Underline />

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cart.map((product) => {
            const {
              id,
              price,
              isDiscount,
              disscount,
              priceBefore,
              name,
              desc,
              companyName,
              inCart,
              quantity,
            } = product;
            return (
              <CartInner key={id}>
                <CartTop>
                  <Img src={productAvatar} alt="item-1" />
                  <CartPriceWrapper>
                    <CartProductName>{name}</CartProductName>
                    <CartProductPrice>
                      {priceFormat(price)} x {inCart}{' '}
                      <span>{priceFormat(sumOfCart)}</span>
                    </CartProductPrice>
                  </CartPriceWrapper>
                  <CartIconWrapper>
                    <img
                      onClick={() => handlerDeleteCartItem(id)}
                      src={trashIcon}
                      alt="trash"
                    />
                  </CartIconWrapper>
                </CartTop>
                <ButtonWrapper>
                  <Button>Checkout</Button>
                </ButtonWrapper>
              </CartInner>
            );
          })}
        </>
      )}
    </Wrapper>
  );
};

export default Cart;
