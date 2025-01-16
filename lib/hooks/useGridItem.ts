import { type CSSProperties, useMemo } from 'react';

import type { GridItemProps } from '../types/grid';
import { valueOrUndefined } from '../utils/utils';

export const useGridItem = ({
  alignSelf,
  gridArea,
  gridColumn,
  gridColumnEnd,
  gridColumnStart,
  gridRow,
  gridRowEnd,
  gridRowStart,
  justifySelf,
  placeSelf,
}: GridItemProps): CSSProperties => {
  return useMemo(
    () => ({
      alignSelf: valueOrUndefined<CSSProperties['alignSelf']>(alignSelf),
      gridArea: valueOrUndefined<CSSProperties['gridArea']>(gridArea),
      gridColumn: valueOrUndefined<CSSProperties['gridColumn']>(gridColumn),
      gridColumnEnd:
        valueOrUndefined<CSSProperties['gridColumnEnd']>(gridColumnEnd),
      gridColumnStart:
        valueOrUndefined<CSSProperties['gridColumnStart']>(gridColumnStart),
      gridRow: valueOrUndefined<CSSProperties['gridRow']>(gridRow),
      gridRowEnd: valueOrUndefined<CSSProperties['gridRowEnd']>(gridRowEnd),
      gridRowStart:
        valueOrUndefined<CSSProperties['gridRowStart']>(gridRowStart),
      justifySelf: valueOrUndefined<CSSProperties['justifySelf']>(justifySelf),
      placeSelf: valueOrUndefined<CSSProperties['placeSelf']>(placeSelf),
    }),
    [
      alignSelf,
      gridArea,
      gridColumn,
      gridColumnEnd,
      gridColumnStart,
      gridRow,
      gridRowEnd,
      gridRowStart,
      justifySelf,
      placeSelf,
    ],
  );
};
