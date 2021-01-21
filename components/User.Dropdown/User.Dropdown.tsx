import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { styled } from '../../stitches.config';
import UserDropdownMenu from './User.Dropdown.Menu';
import Box from '../Utils/Box';

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
  paddingX: '$3',
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

const DropInfoWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const DropInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const DropAvatar = styled('img', {
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: '$gray300',
  borderRadius: '100%',
  flexShrink: 0,
});

const DropUser = styled('h2', {
  color: '$gray900',
  fontSize: '$textSm',
  lineHeight: '1.25rem',
  fontWeight: 500,
});

const DropUserName = styled('p', {
  color: '$gray500',
  fontSize: '$textSm',
  lineHeight: '1.25rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontWeight: 500,
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

const UserDropdown = (props: { fullName: string; username: string }) => {
  const [open, setOpen] = useState(false);
  const { fullName, username } = props;

  return (
    <DropdownArea>
      <DropButton
        type="button"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setOpen(!open)}
      >
        <DropInfoWrap>
          <DropInfo>
            <DropAvatar
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
              alt="Avatar"
            />

            <Box css={{ flex: '1 1 0%', marginLeft: '12px' }}>
              <DropUser>{fullName}</DropUser>
              <DropUserName>{`@${username}`}</DropUserName>
            </Box>
          </DropInfo>
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </DropInfoWrap>
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

export default UserDropdown;
