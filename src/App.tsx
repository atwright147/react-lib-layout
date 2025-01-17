import type { JSX } from 'react';
import { Flex } from '../lib/components/Flex/Flex';
import { FlexItem } from '../lib/components/FlexItem/FlexItem';
import { Grid } from '../lib/components/Grid/Grid';
import { GridItem } from '../lib/components/GridItem/GridItem';

import './App.css';

const styles: React.CSSProperties = {
  border: '2px solid #ccc',
  boxSizing: 'border-box',
  padding: '10px',
};

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1>React Layout</h1>

      <h2>Flex Component</h2>

      <Flex>
        <FlexItem as="nav" style={{ ...styles, width: '100%' }}>
          1
        </FlexItem>
      </Flex>

      <details>
        <h3>
          Default <code>as</code> prop
        </h3>
        <Flex gap="10px">
          <FlexItem as="div" style={{ ...styles, width: '100%' }}>
            1
          </FlexItem>
          <FlexItem style={{ ...styles, width: '100%' }}>2</FlexItem>
          <FlexItem style={{ ...styles, width: '100%' }}>3</FlexItem>
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
          <FlexItem style={{ ...styles, minWidth: '200px' }}>1</FlexItem>
          <FlexItem style={{ ...styles, minWidth: '200px' }}>2</FlexItem>
          <FlexItem style={{ ...styles, minWidth: '200px' }}>3</FlexItem>
        </Flex>
        <h3>
          Flex with FlexItems (using <code>order</code>)
        </h3>
        <Flex gap="10px">
          <FlexItem style={{ ...styles, width: '100%' }}>1</FlexItem>
          <FlexItem style={{ ...styles, width: '100%' }}>2</FlexItem>
          <FlexItem style={{ ...styles, width: '100%' }} order={-1}>
            3
          </FlexItem>
        </Flex>
      </details>

      <h3>Grid</h3>

      <details>
        <Grid gap="10px" gridTemplateColumns={['1fr', '2fr', '1fr']}>
          <GridItem style={{ ...styles }}>1</GridItem>
          <GridItem style={{ ...styles }}>2</GridItem>
          <GridItem style={{ ...styles }}>3</GridItem>
        </Grid>

        <Grid
          as="section"
          gap="10px"
          gridTemplateColumns="repeat(12, 1fr)"
          gridTemplateRows="repeat(5, 50px)"
        >
          <GridItem gridColumnStart={2} gridColumnEnd={6} style={{ ...styles }}>
            1
          </GridItem>
          <GridItem gridRowStart={1} gridRowEnd={5} style={{ ...styles }}>
            2
          </GridItem>
          <GridItem style={{ ...styles }}>3</GridItem>
        </Grid>
      </details>
    </div>
  );
};
