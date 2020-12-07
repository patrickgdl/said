import Head from 'next/head';
import React from 'react';
import reset from '../components/Reset';

import Sidebar from '../components/Sidebar';
import { css, styled } from '../stitches.config';

// @ts-ignore
css.global(reset);

const Box = styled('div', {
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  background: '$white',
});

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home - Said</title>
      </Head>
      <Sidebar />
    </Box>
  );
}
