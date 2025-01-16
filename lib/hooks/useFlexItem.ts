import { type CSSProperties, useMemo } from 'react';

import type { FlexItemProps } from '../types/flex';
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
      alignSelf: valueOrUndefined<CSSProperties['alignSelf']>(alignSelf),
      flex: valueOrUndefined<CSSProperties['flex']>(flex),
      flexBasis: valueOrUndefined<CSSProperties['flexBasis']>(flexBasis),
      flexGrow: valueOrUndefined<CSSProperties['flexGrow']>(flexGrow),
      flexShrink: valueOrUndefined<CSSProperties['flexShrink']>(flexShrink),
      order: valueOrUndefined<CSSProperties['order']>(order),
    }),
    [alignSelf, flex, flexBasis, flexGrow, flexShrink, order],
  );
};
