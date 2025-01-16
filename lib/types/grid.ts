import type { CSSProperties } from 'react';

export type Display = 'grid' | 'inline-grid';

export type GridContainerProps = Partial<{
  display: Display;
  alignContent: CSSProperties['alignContent'];
  alignItems: CSSProperties['alignItems'];
  columnGap: CSSProperties['columnGap'];
  gap: CSSProperties['gap'];
  gridAutoColumns: CSSProperties['gridAutoColumns'];
  gridAutoFlow: CSSProperties['gridAutoFlow'];
  gridAutoRows: CSSProperties['gridAutoRows'];
  gridTemplate: CSSProperties['gridTemplate'];
  gridTemplateAreas: CSSProperties['gridTemplateAreas'];
  gridTemplateColumns: CSSProperties['gridTemplateColumns'];
  gridTemplateRows: CSSProperties['gridTemplateRows'];
  justifyContent: CSSProperties['justifyContent'];
  justifyItems: CSSProperties['justifyItems'];
  placeContent: CSSProperties['placeContent'];
  placeItems: CSSProperties['placeItems'];
  rowGap: CSSProperties['rowGap'];
}>;

export type GridItemProps = Partial<{
  alignSelf: CSSProperties['alignSelf'];
  gridArea: CSSProperties['gridArea'];
  gridColumn: CSSProperties['gridColumn'];
  gridColumnEnd: CSSProperties['gridColumnEnd'];
  gridColumnStart: CSSProperties['gridColumnStart'];
  gridRow: CSSProperties['gridRow'];
  gridRowEnd: CSSProperties['gridRowEnd'];
  gridRowStart: CSSProperties['gridRowStart'];
  justifySelf: CSSProperties['justifySelf'];
  placeSelf: CSSProperties['placeSelf'];
}>;
