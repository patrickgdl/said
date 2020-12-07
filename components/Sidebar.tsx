import React from 'react';

import { styled } from '../stitches.config';
import Logo from './Logo';
import UserDropdown from './UserDropdown';

const SideNav = styled('nav', {
  overflow: 'hidden',
  display: 'flex',
  flexShrink: 0,
  background: '$white',
});

const SideColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingY: '$4',
  borderRightWidth: '1px',
  borderColor: '$gray200',
  borderStyle: 'solid',
  background: '$gray100',
  width: '20vw',
});

const SideLogo = styled('div', {
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  paddingX: '$2',
});

const SideContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  overflowY: 'auto',
  height: 0,
});

const Sidebar = () => (
  <>
    <SideNav>
      <SideColumn>
        <SideLogo>
          <Logo />
        </SideLogo>

        <SideContent>
          <UserDropdown />
        </SideContent>
      </SideColumn>
    </SideNav>
  </>
);

export default Sidebar;
