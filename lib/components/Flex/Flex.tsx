import { forwardRef } from 'react';
import type { ComponentPropsWithRef } from 'react';

import { useFlex } from '../../../lib/hooks/useFlex';
import type { FlexProps } from '../../../lib/types/flex';

export type FlexOwnProps<E extends React.ElementType> =
  ComponentPropsWithRef<'div'> &
    FlexProps & {
      as?: E;
    };

type Props<E extends React.ElementType> = FlexOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof FlexOwnProps<E>>;

export const Flex = forwardRef(
  <E extends React.ElementType = 'div'>(
    { as, children, ...props }: Props<E>,
    ref: React.ForwardedRef<Element>,
  ) => {
    const flexStyle = useFlex(props);
    const Component = as || 'div';

    return (
      <Component ref={ref} style={flexStyle} {...props}>
        {children}
      </Component>
    );
  },
);

Flex.displayName = 'Flex';
