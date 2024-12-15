import type { ComponentPropsWithRef, FC } from 'react';
import type { FlexProps } from '../../types/flex';

type Props = ComponentPropsWithRef<'div'> & FlexProps;

export const Flex: FC<Props> = () => {
  return <div>{/* Your component implementation */}</div>;
};
