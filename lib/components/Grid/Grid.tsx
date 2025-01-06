import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

import { useGrid } from '../../../lib/hooks/useGrid';
import type { GridContainerProps } from '../../../lib/types/grid';

export type GridOwnProps<E extends React.ElementType> =
  ComponentPropsWithRef<'div'> &
    GridContainerProps & {
      as?: E;
    };

type Props<E extends React.ElementType> = GridOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof GridOwnProps<E>>;

export const Grid = forwardRef(
  <E extends React.ElementType = 'div'>(
    {
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
      ...props
    }: Props<E>,
    ref: React.ForwardedRef<Element>,
  ) => {
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
  },
);

Grid.displayName = 'Grid';
