import Head from 'next/head';
import React from 'react';

import reset from '../components/Utils/Reset';
import Sidebar from '../components/Sidebar/Sidebar';
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
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box>
        <Sidebar />
      </Box>
    </>
  );
}
