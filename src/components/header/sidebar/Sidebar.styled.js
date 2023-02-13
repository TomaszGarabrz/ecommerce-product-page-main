import styled from 'styled-components';
import { colors } from '../../../styles/globalStyles';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const SidebarInner = styled.div`
  background-color: #fff;

  width: 60%;
  height: 100%;
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  transform: translateX(-100%);
  transition: all 0.25s ease-in-out;

  &.active {
    transform: translateX(0%);
  }
`;

export const SidebarCloserIconWrapper = styled.div`
  cursor: pointer;

  img {
    width: 20px;
    display: block;
  }
`;
export const SidebarNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const NavItem = styled.div``;
export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: ${colors.orange};
  }
`;
