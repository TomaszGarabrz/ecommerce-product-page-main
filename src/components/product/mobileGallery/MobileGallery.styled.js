import styled, { css } from 'styled-components';
import { devices } from '../../../styles/globalStyles';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  display: none;

  @media ${devices.mobile} {
    display: flex;
  }
`;

export const Img = styled.img`
  width: 100%;
  transform: ${(props) =>
    props.currentSlide ? `translate(-${100 * props.currentSlide}%)` : null};
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  ${(props) =>
    props.left &&
    css`
      left: 5%;
    `}

  ${(props) =>
    props.right &&
    css`
      right: 5%;
    `}
`;
