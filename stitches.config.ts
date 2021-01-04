import { createStyled } from '@stitches/react';

const theme = {
  colors: {
    $black: 'hsl(206,10%,5%)',
    $white: 'white',

    $gray50: '#F9FAFB',
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
    $1: '0.25rem',
    // $1.5:	'0.375rem'	,
    $2: '0.5rem',
    // $2.5:	'0.625rem'		,
    $3: '0.75rem',
    // $3.5:	'0.875rem'		,
    $4: '1rem',
    $5: '1.25rem',
    $6: '1.5rem',
    $7: '1.75rem',
    $8: '2rem',
    $9: '2.25rem',
    $10: '2.5rem',
  },
  sizes: {
    $1: '0.25rem',
    // $1.5:	'0.375rem'	,
    $2: '0.5rem',
    // $2.5:	'0.625rem'		,
    $3: '0.75rem',
    // $3.5:	'0.875rem'		,
    $4: '1rem',
    $5: '1.25rem',
    $6: '1.5rem',
    $7: '1.75rem',
    $8: '2rem',
    $9: '2.25rem',
    $10: '2.5rem',
  },
  fontSizes: {
    $textXs: '0.75rem',
    $textSm: '0.875rem',
    $textBase: '1rem',
    $textLg: '1.125rem',
    $textXl: '1.25rem',
    $text2Xl: '1.5rem',
    $text3xl: '1.875rem',
    // $textXs: { fontSize: '0.75rem', lineHeight: '1rem' },
    // $textSm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
    // $textBase: { fontSize: '1rem', lineHeight: '1.5rem' },
    // $textLg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
    // $textXl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
    // $text2xl: { fontSize: '1.5rem', lineHeight: '2rem' },
    // $text3xl: { fontSize: '1.875rem', lineHeight: '2.25rem' },
    // $text4xl: { fontSize: '2.25rem', lineHeight: '2.5rem' },
    // $text5xl: { fontSize: '3rem', lineHeight: '1' },
    // $text6xl: { fontSize: '3.75rem', lineHeight: '1' },
    // $text7xl: { fontSize: '4.5rem', lineHeight: '1' },
    // $text8xl: { fontSize: '6rem', lineHeight: '1' },
    // $text9xl: { fontSize: '8rem', lineHeight: '1' },
  },
  fontWeights: {
    $light: '300',
    $regular: '400',
    $medium: '500',
    $semibold: '600',
    $bold: '700',
  },
  fonts: {
    $system:
      'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
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
    phoneSm: (rule) => `@media (min-width: 320px) { ${rule} }`,
    phone: (rule) => `@media (min-width: 376px) { ${rule} }`,
    phablet: (rule) => `@media (min-width: 540px) { ${rule} }`,
    tablet: (rule) => `@media (min-width: 735px) { ${rule} }`,
    desktopMd: (rule) => `@media (min-width: 1070px) { ${rule} }`,
    desktopLg: (rule) => `@media (min-width: 1440px) { ${rule} }`,
  },
});
