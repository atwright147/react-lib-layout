import type { ComponentProps, ElementType } from 'react';

import { useGridItem } from '../../../lib/hooks/useGridItem';
import type { GridItemProps } from '../../../lib/types/grid';

// Type definitions
export type GridItemOwnProps<E extends ElementType> = {
  as?: E;
  ref?: React.Ref<Element>;
} & GridItemProps &
  ComponentProps<'div'>;

export type Props<E extends ElementType> = GridItemOwnProps<E> &
  Omit<ComponentProps<E>, keyof GridItemOwnProps<E>>;

// Component definition
export function GridItem<E extends ElementType = 'div'>({
  as,
  children,
  alignSelf,
  gridArea,
  gridColumn,
  gridColumnEnd,
  gridColumnStart,
  gridRow,
  gridRowEnd,
  gridRowStart,
  justifySelf,
  placeSelf,
  style,
  ref,
  ...props
}: Props<E>) {
  const gridItemStyle = useGridItem({
    alignSelf,
    gridArea,
    gridColumn,
    gridColumnEnd,
    gridColumnStart,
    gridRow,
    gridRowEnd,
    gridRowStart,
    justifySelf,
    placeSelf,
  });

  const Component = as || 'div';

  return (
    <Component ref={ref} style={{ ...style, ...gridItemStyle }} {...props}>
      {children}
    </Component>
  );
}
