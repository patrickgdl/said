import React from 'react';
import { styled } from '../stitches.config';

const DropToggle = styled('div', {
  position: 'relative',
  display: 'inline-block',
  textAlign: 'left',
  paddingX: '$2',
  marginTop: '$5',
});

const DropButton = styled('button', {
  width: '100%',
  borderRadius: '6px',
  paddingX: '$3',
  paddingY: '$2',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray700',
  backgroundColor: 'transparent',
  backgroundImage: 'none',

  ':hover': {
    backgroundColor: '$gray100',
    color: '$gray500',
  },
});

const UserDropdown = () => (
  <DropToggle>
    <DropButton type="button" aria-haspopup="true" aria-expanded="true" />
  </DropToggle>
);

export default UserDropdown;
