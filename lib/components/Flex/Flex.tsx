import type { ComponentProps, ElementType } from 'react';

import { useFlex } from '../../../lib/hooks/useFlex';
import type { FlexProps } from '../../../lib/types/flex';

// Type definitions
export type FlexOwnProps<E extends ElementType> = {
  as?: E;
  ref?: React.Ref<Element>;
} & FlexProps &
  ComponentProps<'div'>;

export type Props<E extends ElementType> = FlexOwnProps<E> &
  Omit<ComponentProps<E>, keyof FlexOwnProps<E>>;

// Component definition
export function Flex<E extends ElementType = 'div'>({
  as,
  children,
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  gap,
  justifyContent,
  style,
  ref,
  ...props
}: Props<E>) {
  const flexStyle = useFlex({
    alignContent,
    alignItems,
    alignSelf,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    gap,
    justifyContent,
  });

  const Component = as || 'div';

  return (
    <Component ref={ref} style={{ ...style, ...flexStyle }} {...props}>
      {children}
    </Component>
  );
}
