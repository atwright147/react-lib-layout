// https://youtu.be/uZ8GZm5KEXY?si=vKop2auiF1Is39rw

export type BoxOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  as?: E;
};
type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof BoxOwnProps<E>>;

export const Box = <E extends React.ElementType = 'div'>({
  children,
  as,
  ...props
}: BoxProps<E>) => {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
};
