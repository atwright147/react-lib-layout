import type { ComponentProps, ElementType } from 'react';

import { useGrid } from '../../../lib/hooks/useGrid';
import type { GridContainerProps } from '../../../lib/types/grid';

// Type definitions
export type GridOwnProps<E extends ElementType> = ComponentProps<'div'> &
  GridContainerProps & {
    as?: E;
    ref?: React.Ref<Element>;
  };

export type Props<E extends ElementType> = GridOwnProps<E> &
  Omit<ComponentProps<E>, keyof GridOwnProps<E>>;

// Component definition
export function Grid<E extends ElementType = 'div'>({
  as,
  children,
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
  style,
  ref,
  ...props
}: Props<E>) {
  const gridStyle = useGrid({
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
  });

  const Component = as || 'div';

  return (
    <Component ref={ref} style={{ ...style, ...gridStyle }} {...props}>
      {children}
    </Component>
  );
}
