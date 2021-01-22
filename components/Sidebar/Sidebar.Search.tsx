import React from 'react';

import { styled, css } from '../../stitches.config';
import Box from '../Utils/Box';
import Flex from '../Utils/Flex';
import Input from '../Utils/Input';
import SrOnly from '../Utils/SrOnly';

const SidebarSearch = () => (
  <Box css={sidebarWrapper}>
    <SrOnly htmlFor="search">Busca</SrOnly>
    <SearchBox>
      <SearchIcon>
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </SearchIcon>
      <SearchInput id="search" placeholder="Buscar" />
    </SearchBox>
  </Box>
);

const sidebarWrapper = css({ paddingX: '$3', marginTop: '$5' });

const SearchBox = styled(Box, {
  position: 'relative',
  marginTop: '0.25rem',
  borderRadius: '0.375rem',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
});

const SearchIcon = styled(Flex, {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  paddingLeft: '$3',
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',

  svg: {
    marginRight: '$3',
    height: '$4',
    width: '$4',
    color: '$gray400',
  },
});

const SearchInput = styled(Input, {
  display: 'block',
  width: '100%',
  paddingLeft: '$7',
  phablet: {
    fontSize: '$textSm',
    lineHeight: '1.25rem',
  },
});

export default SidebarSearch;
