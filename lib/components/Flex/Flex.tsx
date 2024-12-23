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

export const Flex = <E extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: Props<E>) => {
  const flexStyle = useFlex(props);
  const Component = as || 'div';

  return (
    <Component style={flexStyle} {...props}>
      {children}
    </Component>
  );
};
