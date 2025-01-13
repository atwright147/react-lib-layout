import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

import { useFlex } from '../../../lib/hooks/useFlex';
import type { FlexProps } from '../../../lib/types/flex';

export type FlexOwnProps<E extends React.ElementType> =
  ComponentPropsWithRef<'div'> &
    FlexProps & {
      as?: E;
    };

export type Props<E extends React.ElementType> = FlexOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof FlexOwnProps<E>>;

export const Flex = forwardRef(
  <E extends React.ElementType = 'div'>(
    {
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
      ...props
    }: Props<E>,
    ref: React.ForwardedRef<Element>,
  ) => {
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
  },
);

Flex.displayName = 'Flex';
