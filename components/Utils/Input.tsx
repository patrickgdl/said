import { styled } from '../../stitches.config';

const Input = styled('input', {
  appearance: 'none',
  backgroundColor: '#fff',
  borderColor: '#d1d5db',
  borderWidth: '1px',
  borderRadius: '0.375rem',
  paddingTop: '0.5rem',
  paddingRight: '0.75rem',
  paddingBottom: '0.5rem',
  paddingLeft: '0.75rem',
  fontSize: '$textBase',
  lineHeight: '1.5rem',

  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 #fff, 0 0 0 1px #2563eb, 0 0 #0000',
    borderColor: '#2563eb',
  },
});

export default Input;
