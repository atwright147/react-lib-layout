export type Display = 'grid' | 'inline-grid';
export type StringOrNumber = string | number;
export type TrackSize =
  | StringOrNumber
  | 'auto'
  | 'fit-content'
  | 'max-content'
  | 'min-content'
  | 'minmax()';
export type GridLine = string | number | 'auto' | 'span';
export type PositionAndSpacing =
  | 'center'
  | 'end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch';
export type AlignAndJustify = 'start' | 'end' | 'center' | 'stretch';
export type Gap = StringOrNumber | [StringOrNumber, StringOrNumber];
export type Flow = 'row' | 'column' | 'row dense' | 'column dense';

export type GridContainerProps = Partial<{
  display: Display;
  alignContent: PositionAndSpacing;
  alignItems: AlignAndJustify;
  columnGap: StringOrNumber;
  gap: Gap;
  gridAutoColumns: TrackSize;
  gridAutoFlow: Flow;
  gridAutoRows: TrackSize;
  gridTemplate: string;
  gridTemplateAreas: string | string[];
  gridTemplateColumns: TrackSize | TrackSize[];
  gridTemplateRows: TrackSize | TrackSize[];
  justifyContent: PositionAndSpacing;
  justifyItems: AlignAndJustify;
  placeContent: string;
  placeItems: string;
  rowGap: StringOrNumber;
}>;

export type GridItem = Partial<{
  alignSelf: AlignAndJustify;
  gridArea: string;
  gridColumn: string;
  gridColumnEnd: GridLine;
  gridColumnStart: GridLine;
  gridRow: string;
  gridRowEnd: GridLine;
  gridRowStart: GridLine;
  justifySelf: AlignAndJustify;
  placeSelf: string;
}>;
