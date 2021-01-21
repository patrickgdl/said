import { styled } from '../../stitches.config';

const SpaceY = styled('div', {
  variants: {
    size: {
      1: {
        '& > :not([hidden]) ~ :not([hidden])': {
          marginTop: 'calc(0.25rem * calc(1 - 0))',
          marginBottom: 'calc(0.25rem * 0))',
        },
      },
      2: {
        '& > :not([hidden]) ~ :not([hidden])': {
          marginTop: 'calc(0.5rem * calc(1 - 0))',
          marginBottom: 'calc(0.5rem * 0))',
        },
      },
      3: {
        '& > :not([hidden]) ~ :not([hidden])': {
          marginTop: 'calc(0.75rem * calc(1 - 0))',
          marginBottom: 'calc(0.75rem * 0))',
        },
      },
      4: {
        '& > :not([hidden]) ~ :not([hidden])': {
          marginTop: 'calc(1rem * calc(1 - 0))',
          marginBottom: 'calc(1rem * 0))',
        },
      },
    },
  },
});

export default SpaceY;
