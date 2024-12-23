// https://youtu.be/uZ8GZm5KEXY?si=vKop2auiF1Is39rw

import { type ComponentPropsWithRef, forwardRef } from 'react';

export type BoxOwnProps<E extends React.ElementType> =
  ComponentPropsWithRef<'div'> & {
    as?: E;
  };

type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof BoxOwnProps<E>>;

export const Box = forwardRef(
  <E extends React.ElementType = 'div'>(
    { as, children, ...props }: BoxProps<E>,
    ref: React.ForwardedRef<Element>,
  ) => {
    const Component = as || 'div';

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  },
);

Box.displayName = 'Box';
