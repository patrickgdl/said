import React from 'react';
import { styled } from '../stitches.config';

const DropDownArea = styled('div', {
  position: 'absolute',
  right: 0,
  left: 0,
  zIndex: 10,
  boxShadow:
    ' 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  transformOrigin: 'top',
  marginTop: '$1',
  marginX: '$2',
  borderRadius: '0.375rem',
});

const DropDownMenu = styled('div', {
  backgroundColor: '$white',
  borderRadius: '0.375rem',
});

const DropDownWrap = styled('div', {
  paddingY: '$1',
});

const DropDownLink = styled('a', {
  display: 'block',
  paddingX: '$4',
  paddingY: '$2',
  color: '$gray700',
  lineHeight: '1.25rem',
  fontSize: '0.875rem',

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

const DropPanel = () => {
  const menuItems: { id: number; name: string; hasBorderAfter?: boolean }[] = [
    { id: 1, name: 'View Profile' },
    { id: 2, name: 'Settings' },
    { id: 3, name: 'Notifications', hasBorderAfter: true },
    { id: 4, name: 'Get desktop app' },
    { id: 5, name: 'Support', hasBorderAfter: true },
    { id: 6, name: 'Logout' },
  ];

  const menuLinks = menuItems.map((value) =>
    value.hasBorderAfter ? (
      <>
        <DropDownLink href="#" role="menuitem">
          {value.name}
        </DropDownLink>
        <DropDownBorder />
      </>
    ) : (
      <DropDownLink href="#" role="menuitem">
        {value.name}
      </DropDownLink>
    )
  );

  return (
    <DropDownArea>
      <DropDownMenu
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <DropDownWrap>{menuLinks}</DropDownWrap>
      </DropDownMenu>
    </DropDownArea>
  );
};

export default DropPanel;
