import { type CSSProperties, useMemo } from 'react';

import type { GridContainerProps } from '../types/grid';
import { valueOrUndefined } from '../utils/utils';

export const useGrid = ({
  display,
  alignContent,
  alignItems,
  columnGap,
  gap,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridTemplate,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  justifyContent,
  justifyItems,
  placeContent,
  placeItems,
  rowGap,
}: GridContainerProps): CSSProperties => {
  return useMemo(
    () => ({
      display: display ? display : 'grid',
      alignContent:
        valueOrUndefined<CSSProperties['alignContent']>(alignContent),
      alignItems: valueOrUndefined<CSSProperties['alignItems']>(alignItems),
      columnGap: valueOrUndefined<CSSProperties['columnGap']>(columnGap),
      gap: valueOrUndefined<CSSProperties['gap']>(gap),
      gridAutoColumns:
        valueOrUndefined<CSSProperties['gridAutoColumns']>(gridAutoColumns),
      gridAutoFlow:
        valueOrUndefined<CSSProperties['gridAutoFlow']>(gridAutoFlow),
      gridAutoRows:
        valueOrUndefined<CSSProperties['gridAutoRows']>(gridAutoRows),
      gridTemplate:
        valueOrUndefined<CSSProperties['gridTemplate']>(gridTemplate),
      gridTemplateAreas:
        valueOrUndefined<CSSProperties['gridTemplateAreas']>(gridTemplateAreas),
      gridTemplateColumns:
        valueOrUndefined<CSSProperties['gridTemplateColumns']>(
          gridTemplateColumns,
        ),
      gridTemplateRows:
        valueOrUndefined<CSSProperties['gridTemplateRows']>(gridTemplateRows),
      justifyContent:
        valueOrUndefined<CSSProperties['justifyContent']>(justifyContent),
      justifyItems:
        valueOrUndefined<CSSProperties['justifyItems']>(justifyItems),
      placeContent:
        valueOrUndefined<CSSProperties['placeContent']>(placeContent),
      placeItems: valueOrUndefined<CSSProperties['placeItems']>(placeItems),
      rowGap: valueOrUndefined<CSSProperties['rowGap']>(rowGap),
    }),
    [
      display,
      alignContent,
      alignItems,
      columnGap,
      gap,
      gridAutoColumns,
      gridAutoFlow,
      gridAutoRows,
      gridTemplate,
      gridTemplateAreas,
      gridTemplateColumns,
      gridTemplateRows,
      justifyContent,
      justifyItems,
      placeContent,
      placeItems,
      rowGap,
    ],
  );
};
