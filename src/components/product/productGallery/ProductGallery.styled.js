import styled from 'styled-components';
import { colors, devices } from '../../../styles/globalStyles';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const BigImageWrapper = styled.div``;

export const Img = styled.img`
  width: 100%;
  border-radius: 10%;
  cursor: pointer;

  &.active {
    border: 5px solid ${colors.orange};
    opacity: 0.7;
  }
`;

export const BigImage = styled.img`
  width: 100%;
  border-radius: 10%;
  cursor: pointer;

  @media ${devices.mobile} {
    border-radius: 0%;
    width: 100%;
    height: 350px;
    object-fit: cover;
    display: none;
  }
`;

export const ImagesGalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media ${devices.mobile} {
    display: none;
  }
`;

export const LightBoxWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export const LightBoxCloseButton = styled.button`
  width: 20px;
  height: 20px;
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    path {
      fill: ${colors.orange};
    }
  }
`;

export const LightBoxContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  display: grid;
`;
export const LightboxImg = styled.img`
  width: 100%;
  margin: 2rem 0;
`;

export const LightboxImagesWrapper = styled.div`
  height: 80px;
  display: flex;
  gap: 2rem;
`;

export const LightBoxImageWrapper = styled.div`
  position: relative;
`;
export const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.direction === 'left' ? '-5%' : '95%')};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  padding: 1rem;

  cursor: pointer;
`;
