import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { styled } from '../../stitches.config';
import Box from '../Utils/Box';
import SpaceY from '../Utils/SpaceY';

const SecondaryNavigation = styled('div', {
  marginTop: '$8',
});

const NavigationItem = styled('a', {
  display: 'flex',
  alignItems: 'center',
  paddingX: '$2',
  paddingY: '$2',
  fontSize: '$textSm',
  lineHeight: '1.25rem',
  fontWeight: 500,
  borderRadius: '0.375rem',
  color: '$gray900',
  backgroundColor: '$gray200',
  transitionProperty:
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  ':focus': {
    outline: '2px solid transparent',
    backgroundColor: '$gray50',
  },

  img: {
    marginRight: '$3',
    height: '1.5rem',
    width: '1.5rem',
    // hacky filter acting as color for img svg
    filter:
      'invert(44%) sepia(8%) saturate(603%) hue-rotate(182deg) brightness(99%) contrast(93%)',
    ':hover': {
      filter:
        'invert(34%) sepia(12%) saturate(621%) hue-rotate(176deg) brightness(92%) contrast(93%)',
    },
    ':focus': {
      filter:
        'invert(34%) sepia(12%) saturate(621%) hue-rotate(176deg) brightness(92%) contrast(93%)',
    },
    transition: 'background-color cubic-bezier(0.4, 0, 0.2, 1) 150ms',
  },
});

const HeadingTitle = styled('h3', {
  paddingX: '$3',
  fontSize: '$textXs',
  lineHeight: '1rem',
  fontWeight: 600,
  color: '$gray500',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

const SecondaryLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  paddingX: '$2',
  paddingY: '$2',
  fontSize: '$textSm',
  lineHeight: '1.25rem',
  fontWeight: 500,
  color: '$gray700',
  borderRadius: '0.375rem',
  transition: 'background-color cubic-bezier(0.4, 0, 0.2, 1) 150ms',

  ':hover': {
    color: '$gray900',
    backgroundColor: '$gray50',
  },

  ':focus': {
    outline: '2px solid transparent',
    backgroundColor: '$gray50',
  },
});

const SecondaryLinkStatus = styled('span', {
  width: '0.625rem',
  height: '0.625rem',
  marginRight: '$4',
  backgroundColor: '$indigo500',
  borderRadius: '9999px',
});

const SecondaryLinkText = styled('span', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const NavigationSidebar = () => {
  const sidebarItems = [
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
          value.isPrimary ? (
            <Link href={value.url} key={value.id}>
              <NavigationItem>
                {value.icon && (
                  <Image
                    src={value.icon}
                    alt={value.name}
                    width="18"
                    height="18"
                  />
                )}
                {value.name}
              </NavigationItem>
            </Link>
          ) : null
        )}
      </SpaceY>

      <SecondaryNavigation>
        <HeadingTitle id="teams-headline">Teams</HeadingTitle>
        <SpaceY size={1}>
          {sidebarItems.map((value) =>
            !value.isPrimary ? (
              <Link href={value.url} key={value.id}>
                <SecondaryLink>
                  <SecondaryLinkStatus />
                  <SecondaryLinkText>{value.name}</SecondaryLinkText>
                </SecondaryLink>
              </Link>
            ) : null
          )}
        </SpaceY>
      </SecondaryNavigation>
    </Box>
  );
};

export default NavigationSidebar;
