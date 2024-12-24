import { Box } from '../lib/components/Box/Box';
import { Flex } from '../lib/components/Flex/Flex';
import { FlexItem } from '../lib/components/FlexItem/FlexItem';

import './App.css';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1>React Layout</h1>

      <h2>Flex Component</h2>

      <h3>
        Default <code>as</code> prop
      </h3>
      <Flex gap="10px">
        <FlexItem style={{ outline: '1px solid #ccc', width: '100%' }}>
          1
        </FlexItem>
        <FlexItem style={{ outline: '1px solid #ccc', width: '100%' }}>
          2
        </FlexItem>
        <FlexItem style={{ outline: '1px solid #ccc', width: '100%' }}>
          3
        </FlexItem>
      </Flex>

      <h3>
        Custom <code>as</code> prop
      </h3>
      <Flex
        as="section"
        gap="10px"
        justifyContent="space-between"
        style={{ outline: '1px solid red', outlineOffset: '5px' }}
      >
        <FlexItem style={{ outline: '1px solid #ccc', minWidth: '200px' }}>
          1
        </FlexItem>
        <FlexItem style={{ outline: '1px solid #ccc', minWidth: '200px' }}>
          2
        </FlexItem>
        <FlexItem style={{ outline: '1px solid #ccc', minWidth: '200px' }}>
          3
        </FlexItem>
      </Flex>

      <h3>
        Flex with FlexItems (using <code>order</code>)
      </h3>
      <Flex gap="10px">
        <FlexItem style={{ outline: '1px solid #ccc', width: '100%' }}>
          1
        </FlexItem>
        <FlexItem style={{ outline: '1px solid #ccc', width: '100%' }}>
          2
        </FlexItem>
        <FlexItem
          style={{ outline: '1px solid #ccc', width: '100%' }}
          order={-1}
        >
          3
        </FlexItem>
      </Flex>

      <hr />

      <Box as="article" className="custom-class">
        Box as Article
      </Box>
    </div>
  );
};
