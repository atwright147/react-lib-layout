import { type CSSProperties, useMemo } from 'react';

import type {
  AlignAndJustify,
  Flow,
  Gap,
  GridContainerProps,
  PositionAndSpacing,
  StringOrNumber,
  TrackSize,
} from '../types/grid';
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
      alignContent: valueOrUndefined<PositionAndSpacing>(alignContent),
      alignItems: valueOrUndefined<AlignAndJustify>(alignItems),
      columnGap: valueOrUndefined<StringOrNumber>(columnGap),
      gap: valueOrUndefined<Gap>(gap),
      gridAutoColumns: valueOrUndefined<TrackSize>(gridAutoColumns),
      gridAutoFlow: valueOrUndefined<Flow>(gridAutoFlow),
      gridAutoRows: valueOrUndefined<TrackSize>(gridAutoRows),
      gridTemplate: valueOrUndefined<string>(gridTemplate),
      gridTemplateAreas: valueOrUndefined<string | string[]>(gridTemplateAreas),
      gridTemplateColumns: valueOrUndefined<TrackSize | TrackSize[]>(
        gridTemplateColumns,
      ),
      gridTemplateRows: valueOrUndefined<TrackSize | TrackSize[]>(
        gridTemplateRows,
      ),
      justifyContent: valueOrUndefined<PositionAndSpacing>(justifyContent),
      justifyItems: valueOrUndefined<PositionAndSpacing>(justifyItems),
      placeContent: valueOrUndefined<string>(placeContent),
      placeItems: valueOrUndefined<string>(placeItems),
      rowGap: valueOrUndefined<StringOrNumber>(rowGap),
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
