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
      url: '/',
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
    <Box as="nav" css={navigation}>
      <SpaceY size={1}>
        {sidebarItems.map((value) =>
          value.isPrimary ? (
            <NavigationItem key={value.id} navItem={value} />
          ) : null
        )}
      </SpaceY>

      <Box css={secondNavigation}>
        <Heading
          as="h3"
          transform="uppercase"
          id="teams-headline"
          css={headingTitle}
        >
          Times
        </Heading>
        <SpaceY size={1} role="group" aria-labelledby="headline">
          {sidebarItems.map((value) =>
            !value.isPrimary ? (
              <NavigationSecondary key={value.id} navItem={value} />
            ) : null
          )}
        </SpaceY>
      </Box>
    </Box>
  );
};
const navigation = css({ paddingX: '$3', marginTop: '$6' });

const secondNavigation = css({ marginTop: '$8' });

const headingTitle = css({
  paddingX: '$3',
  fontSize: '$textXs',
  lineHeight: '1rem',
  color: '$gray500',
  letterSpacing: '0.1em',
});

export default NavigationSidebar;
