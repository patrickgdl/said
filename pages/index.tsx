import Head from 'next/head';
import React from 'react';

import reset from '../components/Utils/Reset';
import Sidebar from '../components/Sidebar/Sidebar';
import { global } from '../stitches.config';
import Box from '../components/Utils/Box';

// @ts-ignore
const globalStyles = global(reset);

export default function Home() {
  globalStyles();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box
        css={{
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          background: '$white',
          boxSizing: 'border-box',
        }}
      >
        <Sidebar />
      </Box>
    </>
  );
}
