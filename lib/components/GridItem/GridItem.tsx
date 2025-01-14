import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

import { useGridItem } from '../../../lib/hooks/useGridItem';
import type { GridContainerProps } from '../../../lib/types/grid';

export type GridItemOwnProps<E extends React.ElementType> =
  ComponentPropsWithRef<'div'> &
    GridContainerProps & {
      as?: E;
    };

export type Props<E extends React.ElementType> = GridItemOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof GridItemOwnProps<E>>;

export const GridItem = forwardRef(
  <E extends React.ElementType = 'div'>(
    {
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
      ...props
    }: Props<E>,
    ref: React.ForwardedRef<Element>,
  ) => {
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
  },
);

GridItem.displayName = 'GridItem';
