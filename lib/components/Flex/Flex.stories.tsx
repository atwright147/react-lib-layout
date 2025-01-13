// src/components/Flex/Flex.stories.tsx

import { Flex, type Props } from './Flex';

const boxStyles = {
  outline: '1px solid red',
  width: '100px',
};

export default {
  component: Flex,
  title: 'Flex',
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <div id="box1" style={boxStyles}>
          1
        </div>
        <div id="box2" style={boxStyles}>
          2
        </div>
        <div id="box3" style={boxStyles}>
          3
        </div>
      </>
    ),
  },
  argTypes: {
    flexDirection: {
      options: ['row', 'column'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: ['flex-start', 'center', 'space-between'],
      control: { type: 'select' },
    },
    alignItems: {
      options: ['flex-start', 'center', 'flex-end'],
      control: { type: 'select' },
    },
    gap: {
      control: { type: 'number' },
    },
  },
};

export const Default = (args: Props<'div'>) => <Flex {...args} />;
export const Row = (args: Props<'div'>) => (
  <Flex flexDirection="row" {...args} />
);
export const Column = (args: Props<'div'>) => (
  <Flex flexDirection="column" {...args} />
);
export const JustifyCenter = (args: Props<'div'>) => (
  <Flex justifyContent="center" {...args} />
);
export const AlignCenter = (args: Props<'div'>) => (
  <Flex alignItems="center" {...args} />
);
export const Gap = (args: Props<'div'>) => <Flex gap="10px" {...args} />;
