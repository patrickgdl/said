import { createStyled } from '@stitches/react';

const theme = {
  colors: {
    $black: 'hsl(206,10%,5%)',
    $white: 'white',

    $gray100: '#F3F4F6',
    $gray200: '#E5E7EB',
    $gray300: '#D1D5DB',
    $gray400: '#9CA3AF',
    $gray500: '#6B7280',
    $gray600: '#4B5563',
    $gray700: '#374151',
    $gray800: '#1F2937',
    $gray900: '#111827',

    $purple100: 'hsl(252,100%,99%)',
    $purple200: 'hsl(252,100%,98%)',
    $purple300: 'hsl(252,100%,94%)',
    $purple400: 'hsl(252,75%,84%)',
    $purple500: 'hsl(252,78%,60%)',
    $purple600: 'hsl(252,80%,53%)',
  },
  space: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
    $7: '40px',
  },
  sizes: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
    $7: '40px',
  },
  fontSizes: {
    $1: '12px',
    $2: '13px',
    $3: '15px',
    $4: '17px',
    $5: '19px',
    $6: '21px',
  },
  fontWeights: {
    $light: '300',
    $regular: '400',
    $medium: '500',
    $semibold: '600',
    $bold: '700',
  },
  fonts: {
    $system: 'system-ui',
  },
};

export const { styled, css } = createStyled({
  tokens: theme,
  utils: {
    marginX: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: () => (value: keyof typeof theme['space'] | (string & {})) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    // fontScale: () => (
    //   value: keyof typeof theme['fontWeights'] | (string & {})
    // ) => ({
    //   fontWeight: value,
    // }),
  },
  breakpoints: {
    bp1: (rule) => `@media (min-width: 520px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 900px) { ${rule} }`,
  },
});
