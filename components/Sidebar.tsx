import React from 'react';

import { styled } from '../stitches.config';
import Logo from './Logo';

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
  background: '$gray100',
});

const SideLogo = styled('div', {
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  paddingX: '$2',
});

const Sidebar = () => (
  <>
    <SideNav>
      <SideColumn />
      <SideLogo>
        <Logo />
      </SideLogo>
    </SideNav>
  </>
);

export default Sidebar;
