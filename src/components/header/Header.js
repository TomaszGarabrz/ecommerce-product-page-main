import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import cartImage from '../../images/icon-cart.svg';
import userImg from '../../images/image-avatar.png';
import {
  CartButton,
  CartImg,
  CartValue,
  Img,
  NavbarItem,
  NavbarLink,
  NavbarWrapper,
  UserImg,
  UserWrapper,
  Wrapper,
  ShowSidebarWrapper,
} from './Header.styled';
import Cart from './cart/Cart';

import SidebarButton from '../../images/icon-menu.svg';

import { useAppContext } from '../../hooks/useContext';
import Sidebar from './sidebar/Sidebar';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const { cart } = useAppContext();

  return (
    <>
      <Wrapper>
        <ShowSidebarWrapper onClick={() => setShowSidebar(true)}>
          <img src={SidebarButton} alt="button" />
        </ShowSidebarWrapper>
        <img src={logo} alt="logo" />
        <NavbarWrapper>
          <NavbarItem>
            <NavbarLink href="#">Collections</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Men</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Women</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">About</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarItem>
        </NavbarWrapper>
        <UserWrapper>
          <CartButton>
            <CartImg
              onClick={() => setShowCart(!showCart)}
              src={cartImage}
              alt="cart"
            />
            <CartValue>{cart.length}</CartValue>
          </CartButton>
          <UserImg src={userImg} alt="avatar" />
        </UserWrapper>
        {showCart ? <Cart /> : null}
      </Wrapper>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Header;
