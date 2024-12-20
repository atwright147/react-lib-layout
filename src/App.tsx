import { Flex } from '../lib/components/Flex/Flex';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Layout</h1>

      <h2>Flex Component</h2>
      <Flex>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Flex>
    </div>
  );
}

export default App;
