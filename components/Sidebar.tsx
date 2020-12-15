import React from 'react';

import { styled } from '../stitches.config';
import DropToggle from './DropToggle';
import Logo from './Logo';

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
    ':hover': {
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

const Sidebar = () => (
  <>
    <SideNav>
      <SideColumn>
        <SideLogo>
          <Logo />
        </SideLogo>

        <SideContent>
          <DropToggle fullName="Juliana Said" username="juhh_juba" />
        </SideContent>
      </SideColumn>
    </SideNav>
  </>
);

export default Sidebar;
