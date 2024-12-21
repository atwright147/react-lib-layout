import { type CSSProperties, useMemo } from 'react';

import type {
  Align,
  FlexDirection,
  FlexProps,
  FlexWrap,
  JustifyContent,
} from '../types/flex';
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
      alignContent: valueOrUndefined<Align>(alignContent),
      alignItems: valueOrUndefined<Align>(alignItems),
      alignSelf: valueOrUndefined<Align>(alignSelf),
      flex: valueOrUndefined(flex),
      flexBasis: valueOrUndefined(flexBasis),
      flexDirection: valueOrUndefined<FlexDirection>(flexDirection),
      flexGrow: valueOrUndefined(flexGrow),
      flexShrink: valueOrUndefined(flexShrink),
      flexWrap: valueOrUndefined<FlexWrap>(flexWrap),
      gap: valueOrUndefined<string>(gap),
      justifyContent: valueOrUndefined<JustifyContent>(justifyContent),
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
