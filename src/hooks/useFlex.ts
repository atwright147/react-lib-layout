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
  justifyContent,
}: FlexProps): CSSProperties => {
  return useMemo(
    () => ({
      alignContent: valueOrUndefined<Align>(alignContent),
      alignItems: valueOrUndefined<Align>(alignItems),
      alignSelf: valueOrUndefined<Align>(alignSelf),
      flex: valueOrUndefined(flex),
      flexBasis: valueOrUndefined(flexBasis),
      flexDirection: valueOrUndefined<FlexDirection>(flexDirection),
      flexGrow: valueOrUndefined(flexGrow),
      flexShrink: valueOrUndefined(flexShrink),
      flexWrap: valueOrUndefined<FlexWrap>(flexWrap),
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
      justifyContent,
    ],
  );
};
