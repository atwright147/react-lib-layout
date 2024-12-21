import { Flex } from '../lib/components/Flex/Flex';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Layout</h1>

      <h2>Flex Component</h2>
      <Flex gap="10px">
        <div style={{ outline: '1px solid #ccc', width: '100%' }}>1</div>
        <div style={{ outline: '1px solid #ccc', width: '100%' }}>2</div>
        <div style={{ outline: '1px solid #ccc', width: '100%' }}>3</div>
      </Flex>
    </div>
  );
}

export default App;
