import Link from 'next/link';
import React from 'react';

import { styled } from '../../stitches.config';
import { NavItem } from '../../types/nav-item.interface';

const NavigationSecondary: React.FC<{ navItem: NavItem }> = ({ navItem }) => (
  <Link href={navItem.url} key={navItem.id}>
    <LinkItem>
      <LinkStatus />
      <LinkText>{navItem.name}</LinkText>
    </LinkItem>
  </Link>
);

const LinkItem = styled('a', {
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

const LinkStatus = styled('span', {
  width: '0.625rem',
  height: '0.625rem',
  marginRight: '$4',
  backgroundColor: '$indigo500',
  borderRadius: '9999px',
});

const LinkText = styled('span', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export default NavigationSecondary;
