import { Box } from '../lib/components/Box/Box';
import { Flex } from '../lib/components/Flex/Flex';
import { FlexItem } from '../lib/components/FlexItem/FlexItem';
import { Grid } from '../lib/components/Grid/Grid';

import './App.css';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1>React Layout</h1>

      <h2>Flex Component</h2>

      <details>
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
      </details>

      <h3>Grid</h3>

      <details>
        <Grid gap="10px" gridTemplateColumns={['1fr', '2fr', '1fr']}>
          <Box style={{ outline: '1px solid #ccc' }}>1</Box>
          <Box style={{ outline: '1px solid #ccc' }}>2</Box>
          <Box style={{ outline: '1px solid #ccc' }}>3</Box>
        </Grid>
      </details>
    </div>
  );
};
