import Link from 'next/link';
import React from 'react';

import { styled } from '../../stitches.config';

const DropDownMenu = styled('div', {
  backgroundColor: '$white',
  borderRadius: '0.375rem',
  paddingY: '$1',
});

const DropDownLink = styled('a', {
  display: 'block',
  paddingX: '$4',
  paddingY: '$2',
  color: '$gray700',
  lineHeight: '1.25rem',
  fontSize: '$textSm',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '$gray100',
    color: '$gray900',
  },

  ':focus': {
    outline: 'none',
    backgroundColor: '$gray100',
    color: '$gray900',
  },
});

const DropDownBorder = styled('div', {
  borderTopWidth: '1px',
  borderColor: '$gray100',
});

const UserDropdownMenu = () => {
  const menuItems: {
    id: number;
    name: string;
    hasBorderAfter?: boolean;
    url: string;
  }[] = [
    { id: 1, name: 'View Profile', url: '/about' },
    { id: 2, name: 'Settings', url: '' },
    { id: 3, name: 'Notifications', hasBorderAfter: true, url: '' },
    { id: 4, name: 'Get desktop app', url: '' },
    { id: 5, name: 'Support', hasBorderAfter: true, url: '' },
    { id: 6, name: 'Logout', url: '' },
  ];

  return (
    <DropDownMenu
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      {menuItems.map((value) => (
        <React.Fragment key={value.id}>
          <Link href={value.url}>
            <DropDownLink role="menuitem">{value.name}</DropDownLink>
          </Link>
          {value.hasBorderAfter && <DropDownBorder />}
        </React.Fragment>
      ))}
    </DropDownMenu>
  );
};

export default UserDropdownMenu;
