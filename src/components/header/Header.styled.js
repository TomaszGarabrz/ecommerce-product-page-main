import styled from 'styled-components';
import { colors, devices } from '../../styles/globalStyles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  border-bottom: 1px solid #ddd;
  height: 100px;
  position: relative;

  @media ${devices.mobile} {
    margin: 0 1rem;
    gap: 1.5rem;
  }
`;

export const ShowSidebarWrapper = styled.div`
  cursor: pointer;
  display: none;

  @media ${devices.mobile} {
    display: block;
  }

  img {
    width: 20px;
    display: block;
  }
`;

export const UserWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  height: 100%;

  @media ${devices.mobile} {
    display: none;
  }
`;

export const NavbarItem = styled.div`
  height: 100%;
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  color: ${colors.graylishBlue};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.25s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: ${colors.orange};
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }

  &:hover {
    color: #000;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: ${colors.orange};
      opacity: 1;
    }
  }
`;

export const CartButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
`;

export const CartValue = styled.p`
  position: absolute;
  top: -50%;
  right: -50%;
  background-color: ${colors.orange};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartImg = styled.img`
  width: 100%;
`;

export const UserImg = styled.img`
  width: 55px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  padding: 0.25rem;

  @media ${devices.mobile} {
    width: 45px;
  }

  &:hover {
    background-color: ${colors.orange};
    border-radius: 50%;
  }
`;
