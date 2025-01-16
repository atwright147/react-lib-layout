import type { CSSProperties } from 'react';

export type FlexProps = Partial<{
  alignContent: CSSProperties['alignContent'];
  alignItems: CSSProperties['alignItems'];
  alignSelf: CSSProperties['alignSelf'];
  flex: CSSProperties['flex'];
  flexBasis: CSSProperties['flexBasis'];
  flexDirection: CSSProperties['flexDirection'];
  flexGrow: CSSProperties['flexGrow'];
  flexShrink: CSSProperties['flexShrink'];
  flexWrap: CSSProperties['flexWrap'];
  gap: CSSProperties['gap'];
  justifyContent: CSSProperties['justifyContent'];
}>;

export type FlexItemProps = Partial<{
  alignSelf: CSSProperties['alignSelf'];
  flex: CSSProperties['flex'];
  flexBasis: CSSProperties['flexBasis'];
  flexGrow: CSSProperties['flexGrow'];
  flexShrink: CSSProperties['flexShrink'];
  order: CSSProperties['order'];
}>;
