import React from 'react';

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
      name: 'Minhas atividades',
      isPrimary: true,
      url: '',
      icon: '/task.svg',
    },
    {
      id: 3,
      name: 'Recentes',
      isPrimary: true,
      url: '',
      icon: '/history.svg',
    },
    { id: 4, name: 'Grupo 1', isPrimary: false, url: '' },
    { id: 5, name: 'Grupo 2', isPrimary: false, url: '' },
    { id: 6, name: 'Grupo 3', isPrimary: false, url: '' },
  ];

  return (
    <Box as="nav" css={{ paddingX: '$3', marginTop: '$6' }}>
      <SpaceY size={1}>
        {sidebarItems.map((value) =>
          value.isPrimary ? (
            <NavigationItem key={value.id} navItem={value} />
          ) : null
        )}
      </SpaceY>

      <Box css={{ marginTop: '$8' }}>
        <Heading
          as="h3"
          transform="uppercase"
          id="teams-headline"
          css={{
            paddingX: '$3',
            fontSize: '$textXs',
            lineHeight: '1rem',
            color: '$gray500',
            letterSpacing: '0.1em',
          }}
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

export default NavigationSidebar;
