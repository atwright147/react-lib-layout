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

export type AlignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

export type Flex = 'none' | 'flex-grow' | 'flex-shrink' | 'flex-basis';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type FlexBasis =
  | 'auto'
  | 'min-content'
  | 'max-content'
  | 'fit-content'
  | string;

export type FlexGrowAndShrink =
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'
  | number;

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
  gap: string;
  justifyContent: JustifyContent;
}>;

export type FlexItemProps = Partial<{
  alignSelf: AlignSelf;
  flex: Flex;
  flexBasis: FlexBasis;
  flexGrow: FlexGrowAndShrink;
  flexShrink: FlexGrowAndShrink;
  order: number;
}>;
