import { style } from '@vanilla-extract/css';

export const flexGenerator = (
  flexDirection: 'row' | 'column' = 'row',
  justifyContent:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around' = 'center',
  alignItems:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline' = 'center'
) =>
  style({
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
  });

export const fixedGenerator = (
  offsets: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    center?: boolean;
  } = {},
  zIndex: number = 1
) => {
  const { center, ...otherOffsets } = offsets;
  return style({
    position: 'fixed',
    zIndex,
    width: '100%',
    maxWidth: 'var(--max-width)',
    minWidth: 'var(--min-width)',
    ...otherOffsets,
    ...(center && {
      left: '50%',
      transform: 'translateX(-50%)',
    }),
  });
};
