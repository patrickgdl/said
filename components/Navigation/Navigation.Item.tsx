import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { styled } from '../../stitches.config';
import { NavItem } from '../../types/nav-item.interface';

const NavigationItem: React.FC<{ navItem: NavItem }> = ({ navItem }) => (
  <Link href={navItem.url} key={navItem.id}>
    <Item>
      {navItem.icon && (
        <Image src={navItem.icon} alt={navItem.name} width="18" height="18" />
      )}
      {navItem.name}
    </Item>
  </Link>
);

const Item = styled('a', {
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

export default NavigationItem;
