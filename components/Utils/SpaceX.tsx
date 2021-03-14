import { styled } from '../../stitches.config';

const SpaceX = styled('div', {
  variants: {
    size: {
      1: {
        '& > :not([hidden]) ~ :not([hidden])': {
          marginRight: 'calc(0.25rem * calc(1 - 0))',
          marginLeft: 'calc(0.25rem * calc(1 - 0))',
        },
      },
      2: {
        '& > :not([hidden]) ~ :not([hidden])': {
          marginRight: 'calc(0.5rem * calc(1 - 0))',
          marginLeft: 'calc(0.5rem * calc(1 - 0))',
        },
      },
      3: {
        '& > :not([hidden]) ~ :not([hidden])': {
          marginRight: 'calc(0.75rem * calc(1 - 0))',
          marginLeft: 'calc(0.75rem * calc(1 - 0))',
        },
      },
      4: {
        '& > :not([hidden]) ~ :not([hidden])': {
          marginRight: 'calc(1rem * calc(1 - 0))',
          marginLeft: 'calc(1rem * calc(1 - 0))',
        },
      },
    },
  },
});

export default SpaceX;
