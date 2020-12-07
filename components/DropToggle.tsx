import React from 'react';
import { styled } from '../stitches.config';

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
  fontSize: '14px',
  lineHeight: '14px',
  color: '$gray700',
  transitionProperty:
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',

  ':hover': {
    backgroundColor: '$gray100',
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
    ':hover': {
      color: '$gray500',
    },
  },
});

const DropInfo = styled('div', {
  display: 'flex',
  alignItem: 'center',
  justify: 'space-between',
});

const DropAvatar = styled('img', {
  width: '$7',
  height: '$7',
  backgroundColor: '$gray300',
  borderRadius: '100%',
  flexShrink: 0,
});

const DropUser = styled('h2', {
  color: '$gray900',
  fontSize: '14px',
  lineHeight: '14px',
  fontWeight: 500,
});

const DropUserName = styled('p', {
  color: '$gray500',
  fontSize: '14px',
  lineHeight: '14px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const DropToggle = () => (
  <DropdownArea>
    <div>
      <DropButton type="button" aria-haspopup="true" aria-expanded="true">
        <DropInfo>
          <DropAvatar
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
            alt="Avatar"
          />

          <div style={{ flex: '1 1 0%', marginLeft: '12px' }}>
            <DropUser>Juliana Said</DropUser>
            <DropUserName>@juhh_juba</DropUserName>
          </div>
        </DropInfo>
        <svg width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </DropButton>
    </div>
  </DropdownArea>
);

export default DropToggle;
