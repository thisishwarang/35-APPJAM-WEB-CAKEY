import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const divStyle = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
});

export const numberLabelStyle = style([
  vars.fonts.body04_m_16,
  flexGenerator(),
  {
    position: 'absolute',
    width: '3.6rem',
    height: '3.6rem',
    backgroundColor: vars.colors.dimmed,
    color: vars.colors.white,
    borderRadius: '4px 0px',
  },
]);

export const imageStyle = recipe({
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  variants: {
    variant: {
      square: { borderRadius: '0px' },
      rounded: { borderRadius: '4px' },
    },
  },
});

export const iconButtonStyle = style({
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
});
