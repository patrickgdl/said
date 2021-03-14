import React from 'react';

import Box from '../Utils/Box';
import SpaceX from '../Utils/SpaceX';
import { styled } from '../../stitches.config';

const UserDropdownInfo: React.FC<{ fullName: string; username: string }> = ({
  fullName,
  username,
}) => (
  <DropInfoWrap>
    <SpaceX
      size={3}
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <DropAvatar
        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
        alt="Avatar"
      />

      <Box css={{ flex: 'auto' }}>
        <DropUser>{fullName}</DropUser>
        <DropUserName>{`@${username}`}</DropUserName>
      </Box>
    </SpaceX>
    <svg width="18px" height="18px" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </DropInfoWrap>
);

const DropInfoWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
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
export default UserDropdownInfo;
