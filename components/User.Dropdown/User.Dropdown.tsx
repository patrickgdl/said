import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { styled } from '../../stitches.config';
import UserDropdownInfo from './User.Dropdown.Info';
import UserDropdownMenu from './User.Dropdown.Menu';

const UserDropdown: React.FC<{
  fullName: string;
  username: string;
}> = ({ fullName, username }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownArea>
      <DropButton
        type="button"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setOpen(!open)}
      >
        <UserDropdownInfo username={username} fullName={fullName} />
      </DropButton>
      <AnimatePresence>
        {open && (
          <DropdownMenuArea
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <UserDropdownMenu />
          </DropdownMenuArea>
        )}
      </AnimatePresence>
    </DropdownArea>
  );
};

const DropdownArea = styled('div', {
  position: 'relative',
  display: 'inline-block',
  textAlign: 'left',
  paddingX: '$2',
  marginTop: '$5',
});

const DropButton = styled('button', {
  width: '100%',
  borderRadius: '6px',
  paddingX: '$3-5',
  paddingY: '$2',
  fontWeight: 400,
  fontSize: '$textSm',
  lineHeight: '1.25rem',
  color: '$gray700',
  backgroundColor: '$gray100',
  cursor: 'pointer',
  transitionProperty:
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  ':hover': {
    backgroundColor: '$gray50',
    color: '$gray500',
  },

  ':focus': {
    outline: 'none',
    backgroundColor: '$gray200',
  },

  ':active': {
    backgroundColor: '$gray100',
    color: '$gray800',
  },

  svg: {
    color: '$gray400',
    width: '1.25rem',
    height: '1.25rem',
    ':hover': {
      color: '$gray500',
    },
  },
});

const DropdownMenuArea = styled(motion.div, {
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

export default UserDropdown;
