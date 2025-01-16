import { type CSSProperties, useMemo } from 'react';

import type { FlexProps } from '../types/flex';
import { valueOrUndefined } from '../utils/utils';

export const useFlex = ({
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  gap,
  justifyContent,
}: FlexProps): CSSProperties => {
  return useMemo(
    () => ({
      display: 'flex',
      alignContent:
        valueOrUndefined<CSSProperties['alignContent']>(alignContent),
      alignItems: valueOrUndefined<CSSProperties['alignItems']>(alignItems),
      alignSelf: valueOrUndefined<CSSProperties['alignSelf']>(alignSelf),
      flex: valueOrUndefined<CSSProperties['flex']>(flex),
      flexBasis: valueOrUndefined<CSSProperties['flexBasis']>(flexBasis),
      flexDirection:
        valueOrUndefined<CSSProperties['flexDirection']>(flexDirection),
      flexGrow: valueOrUndefined<CSSProperties['flexGrow']>(flexGrow),
      flexShrink: valueOrUndefined<CSSProperties['flexShrink']>(flexShrink),
      flexWrap: valueOrUndefined<CSSProperties['flexWrap']>(flexWrap),
      gap: valueOrUndefined<CSSProperties['gap']>(gap),
      justifyContent:
        valueOrUndefined<CSSProperties['justifyContent']>(justifyContent),
    }),
    [
      alignContent,
      alignItems,
      alignSelf,
      flex,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      gap,
      justifyContent,
    ],
  );
};
