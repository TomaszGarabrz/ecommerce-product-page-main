import React from 'react';
import {
  NavItem,
  NavLink,
  SidebarCloserIconWrapper,
  SidebarNavWrapper,
  Wrapper,
  SidebarInner,
} from './Sidebar.styled';

import iconClose from '../../../images/icon-close.svg';

const Sidebar = ({ setShowSidebar, showSidebar }) => {
  return (
    <Wrapper className={`${showSidebar ? 'active' : ''}`}>
      <SidebarInner className={`${showSidebar ? 'active' : ''}`}>
        <SidebarCloserIconWrapper onClick={() => setShowSidebar(false)}>
          <img src={iconClose} alt="" />
        </SidebarCloserIconWrapper>
        <SidebarNavWrapper>
          <NavItem>
            <NavLink href="#">Collections</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Men</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Women</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </SidebarNavWrapper>
      </SidebarInner>
    </Wrapper>
  );
};

export default Sidebar;
