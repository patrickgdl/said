import React from 'react';
import { css } from '../../stitches.config';

import { NavItem } from '../../types/nav-item.interface';
import Box from '../Utils/Box';
import Heading from '../Utils/Heading';
import SpaceY from '../Utils/SpaceY';
import NavigationItem from './Navigation.Item';
import NavigationSecondary from './Navigation.Secondary';

const NavigationSidebar = () => {
  const sidebarItems: NavItem[] = [
    {
      id: 1,
      name: 'Home',
      isPrimary: true,
      url: '/about',
      icon: '/home.svg',
    },
    {
      id: 2,
      name: 'My tasks',
      isPrimary: true,
      url: '',
      icon: '/task.svg',
    },
    {
      id: 3,
      name: 'Recent',
      isPrimary: true,
      url: '',
      icon: '/history.svg',
    },
    { id: 4, name: 'Engineering', isPrimary: false, url: '' },
    { id: 5, name: 'Human Resources', isPrimary: false, url: '' },
    { id: 6, name: 'Customer Success', isPrimary: false, url: '' },
  ];

  return (
    <Box as="nav" css={{ paddingX: '$3', marginTop: '$6' }}>
      <SpaceY size={1}>
        {sidebarItems.map((value) =>
          value.isPrimary ? <NavigationItem navItem={value} /> : null
        )}
      </SpaceY>

      <Box css={{ marginTop: '$8' }}>
        <Heading
          as="h3"
          transform="uppercase"
          id="teams-headline"
          css={HeadingTitle}
        >
          Times
        </Heading>
        <SpaceY size={1}>
          {sidebarItems.map((value) =>
            !value.isPrimary ? <NavigationSecondary navItem={value} /> : null
          )}
        </SpaceY>
      </Box>
    </Box>
  );
};

const HeadingTitle = css({
  paddingX: '$3',
  fontSize: '$textXs',
  lineHeight: '1rem',
  fontWeight: 600,
  color: '$gray500',
  letterSpacing: '0.05em',
});

export default NavigationSidebar;
