import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const modalLayoutStyle = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    maxWidth: 'var(--max-width)',
    width: '100dvw',
    minHeight: '100dvh',
    padding: '6rem 0.6rem 0',
  },
]);

export const textSection = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    margin: '2rem 0 2.8rem',
    gap: '0.8rem',
    padding: '0 2rem',
    width: '100%',
  },
]);

export const h1Style = style([
  vars.fonts.head01_b_24,
  {
    color: vars.colors.black,
  },
]);

export const spanStyle = style([
  vars.fonts.body07_r_14,
  {
    color: vars.colors.gray700,
  },
]);

export const inputSection = style({
  width: '100%',
  marginBottom: '1.9rem',
  padding: '0 1.4rem',
});

export const scrollSection = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    gap: '1rem',
    padding: '0 1.4rem',
    width: '100%',
    maxHeight: 'calc(100dvh - 8rem - 7.3rem - 5rem - 1.9rem)',
    overflowY: 'auto',
    scrollbarGutter: 'stable',

    selectors: {
      '&::-webkit-scrollbar': {
        display: 'block',
        width: '0.4rem',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '4.8rem',
        backgroundColor: vars.colors.gray300,
      },
    },
  },
]);

export const noResultSection = style([
  flexGenerator('column'),
  {
    width: '100%',
    height: 'calc(100dvh - 8rem - 7.3rem - 5rem - 1.9rem - 10rem)',
    gap: '0.8rem',
  },
]);

export const noResultTextStyle = style([
  vars.fonts.body04_m_16,
  { color: vars.colors.gray700 },
]);

export const noResultSubTextStyle = style([
  vars.fonts.body05_m_14,
  { color: vars.colors.gray400 },
]);

export const footerSection = style({
  width: '100%',
  marginTop: 'auto',
  padding: '1.2rem 1.4rem 1.7rem',
});
