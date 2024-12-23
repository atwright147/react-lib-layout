import { Box } from '../lib/components/Box/Box';
import { Flex } from '../lib/components/Flex/Flex';

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
        <div style={{ outline: '1px solid #ccc', width: '100%' }}>1</div>
        <div style={{ outline: '1px solid #ccc', width: '100%' }}>2</div>
        <div style={{ outline: '1px solid #ccc', width: '100%' }}>3</div>
      </Flex>

      <h3>
        Custom <code>as</code> prop
      </h3>
      <Flex as="section" gap="10px">
        <div style={{ outline: '1px solid #ccc', width: '100%' }}>1</div>
        <div style={{ outline: '1px solid #ccc', width: '100%' }}>2</div>
        <div style={{ outline: '1px solid #ccc', width: '100%' }}>3</div>
      </Flex>

      <hr />

      <Box as="article" className="xxx">
        Text
      </Box>
    </div>
  );
};
