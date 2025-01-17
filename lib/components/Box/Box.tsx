import type { ComponentProps, ElementType } from 'react';

// Type definitions
export type BoxOwnProps<E extends ElementType> = ComponentProps<'div'> & {
  as?: E;
  ref?: React.Ref<Element>;
};

type BoxProps<E extends ElementType> = BoxOwnProps<E> &
  Omit<ComponentProps<E>, keyof BoxOwnProps<E>>;

// Component definition
export function Box<E extends ElementType = 'div'>({
  as,
  children,
  ref,
  ...props
}: BoxProps<E>) {
  const Component = as || 'div';

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
}
