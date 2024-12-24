import { type CSSProperties, useMemo } from 'react';

import type {
  AlignSelf,
  Flex,
  FlexBasis,
  FlexGrowAndShrink,
  FlexItemProps,
} from '../types/flex';
import { valueOrUndefined } from '../utils/utils';

export const useFlexItem = ({
  alignSelf,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  order,
}: FlexItemProps): CSSProperties => {
  return useMemo(
    () => ({
      alignSelf: valueOrUndefined<AlignSelf>(alignSelf),
      flex: valueOrUndefined<Flex>(flex),
      flexBasis: valueOrUndefined<FlexBasis>(flexBasis),
      flexGrow: valueOrUndefined<FlexGrowAndShrink>(flexGrow),
      flexShrink: valueOrUndefined<FlexGrowAndShrink>(flexShrink),
      order: valueOrUndefined<number>(order),
    }),
    [alignSelf, flex, flexBasis, flexGrow, flexShrink, order],
  );
};
