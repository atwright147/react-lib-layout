import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

import { useFlexItem } from '../../hooks/useFlexItem';
import type { FlexItemProps } from '../../types/flex';

export type FlexOwnProps<E extends React.ElementType> =
  ComponentPropsWithRef<'div'> &
    FlexItemProps & {
      as?: E;
    };

type Props<E extends React.ElementType> = FlexOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof FlexOwnProps<E>>;

export const FlexItem = forwardRef(
  <E extends React.ElementType = 'div'>(
    {
      as,
      children,
      alignSelf,
      flex,
      flexBasis,
      flexGrow,
      flexShrink,
      order,
      style,
      ...props
    }: Props<E>,
    ref: React.ForwardedRef<Element>,
  ) => {
    const flexItemStyle = useFlexItem({
      alignSelf,
      flex,
      flexBasis,
      flexGrow,
      flexShrink,
      order,
    });
    const Component = as || 'div';

    return (
      <Component ref={ref} style={{ ...style, ...flexItemStyle }} {...props}>
        {children}
      </Component>
    );
  },
);
