import React from 'react';

import { styled } from '../../stitches.config';
import Logo from '../Utils/Logo';
import NavigationSidebar from '../Navigation/Navigation.Sidebar';
import UserDropdown from '../User.Dropdown/User.Dropdown';
import SidebarSearch from './Sidebar.Search';

const Sidebar = () => (
  <>
    <SideNav>
      <SideColumn>
        <SideLogo>
          <Logo />
        </SideLogo>

        <SideContent>
          <UserDropdown fullName="Juliana Said" username="juhh_juba" />

          <SidebarSearch />

          <NavigationSidebar />
        </SideContent>
      </SideColumn>
    </SideNav>
  </>
);

const SideNav = styled('nav', {
  overflow: 'hidden',
  display: 'flex',
  flexShrink: 0,
});

const SideColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingY: '$4',
  borderRightWidth: '1px',
  borderColor: '$gray200',
  borderStyle: 'solid',
  background: '$gray100',
  width: '15.5rem',
});

const SideLogo = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  svg: {
    cursor: 'pointer',
    color: '$gray500',
    '&:hover': {
      color: '$gray600',
    },
  },
});

const SideContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  overflowY: 'auto',
  height: 0,
});

export default Sidebar;
