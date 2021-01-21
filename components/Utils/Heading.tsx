import { styled } from '../../stitches.config';

const Heading = styled('h1', {
  boxSizing: 'border-box',
  variants: {
    transform: {
      uppercase: {
        textTransform: 'uppercase',
      },
      lowerCase: {
        textTransform: 'lowercase',
      },
    },
  },
});

export default Heading;
