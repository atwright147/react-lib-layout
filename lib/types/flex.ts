export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type JustifyContent =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-between'
  | 'space-evenly'
  | 'space-around';

export type Align =
  | 'auto'
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'stretch';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type FlexProps = Partial<{
  alignContent: Align;
  alignItems: Align;
  alignSelf: Align;
  flex: string;
  flexBasis: number;
  flexDirection: FlexDirection;
  flexGrow: number;
  flexShrink: number;
  flexWrap: FlexWrap;
  gap: number;
  justifyContent: JustifyContent;
}>;
