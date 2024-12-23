import {
  type ComponentPropsWithRef,
  type ElementType,
  forwardRef,
} from 'react';

import { useFlex } from '../../../lib/hooks/useFlex';
import type { FlexProps } from '../../../lib/types/flex';

export type Props = ComponentPropsWithRef<'div'> &
  FlexProps & {
    as?: ElementType;
  };

export const Flex = forwardRef<HTMLDivElement, Props>(
  ({ as, children, ...props }, ref) => {
    const flexStyle = useFlex(props);
    const Component = as || 'div';

    return (
      <Component ref={ref} style={flexStyle} {...props}>
        {children}
      </Component>
    );
  },
);
