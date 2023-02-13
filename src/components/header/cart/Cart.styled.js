import styled from 'styled-components';
import { colors } from '../../../styles/globalStyles';

export const Wrapper = styled.div`
  position: absolute;
  top: 90%;
  right: 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 380px;
  border-radius: 10px;
  padding: 2rem 0;
  z-index: 9999;
`;

export const CartTitle = styled.p`
  padding: 0 1.5rem;
  padding-bottom: 1.5rem;
  font-weight: bold;
`;

export const Underline = styled.hr`
  width: 100%;
  background-color: #fff;
  height: 1px;
`;

export const CartInner = styled.div``;

export const CartTop = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  margin-bottom: 1rem;
  align-items: center;
  padding: 1.5rem;
`;

export const Img = styled.img`
  width: 80%;
  border-radius: 10px;
`;

export const CartPriceWrapper = styled.div`
  color: ${colors.graylishBlue};
  display: flex;
  justify-content: space-around;

  height: 100%;
  flex-direction: column;
`;

export const CartProductName = styled.p``;
export const CartProductPrice = styled.p`
  span {
    color: #000;
    font-weight: bold;
  }
`;
export const CartIconWrapper = styled.div`
  justify-self: flex-end;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  padding: 0 1.5rem 0 1.5rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${colors.orange};
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;
