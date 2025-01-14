import { type CSSProperties, useMemo } from 'react';

import type { AlignAndJustify, GridItemProps, GridLine } from '../types/grid';
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
      alignSelf: valueOrUndefined<AlignAndJustify>(alignSelf),
      gridArea: valueOrUndefined(gridArea),
      gridColumn: valueOrUndefined(gridColumn),
      gridColumnEnd: valueOrUndefined<GridLine>(gridColumnEnd),
      gridColumnStart: valueOrUndefined<GridLine>(gridColumnStart),
      gridRow: valueOrUndefined(gridRow),
      gridRowEnd: valueOrUndefined<GridLine>(gridRowEnd),
      gridRowStart: valueOrUndefined<GridLine>(gridRowStart),
      justifySelf: valueOrUndefined<AlignAndJustify>(justifySelf),
      placeSelf: valueOrUndefined(placeSelf),
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
