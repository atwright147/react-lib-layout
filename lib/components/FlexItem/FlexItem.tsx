import type { ComponentProps, ElementType } from 'react';

import { useFlexItem } from '../../hooks/useFlexItem';
import type { FlexItemProps } from '../../types/flex';

export type FlexOwnProps<E extends ElementType> = ComponentProps<'div'> &
  FlexItemProps & {
    as?: E;
    ref?: React.Ref<Element>;
  };

type Props<E extends React.ElementType> = FlexOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof FlexOwnProps<E>>;

// Component definition
export function FlexItem<E extends ElementType = 'div'>({
  as,
  children,
  alignSelf,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  order,
  style,
  ref,
  ...props
}: Props<E>) {
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
}
