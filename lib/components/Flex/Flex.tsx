import { type ComponentPropsWithRef, forwardRef } from 'react';
import { useFlex } from '../../../lib/hooks/useFlex';
import type { FlexProps } from '../../../lib/types/flex';

export type Props = ComponentPropsWithRef<'div'> & FlexProps;

export const Flex = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => {
    const flexStyle = useFlex(props);

    return (
      <div ref={ref} style={flexStyle} {...props}>
        {children}
      </div>
    );
  },
);
