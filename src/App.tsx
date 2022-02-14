import React, { useState } from 'react';
import { Alert } from './components/index';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(123);

  return (
    <div className="App">
      <Alert />
      <header className="App-header">
        <p>{ count }</p>
        <button
          onClick={() => {
            setCount(prev => prev + 1);
          }}
        >
          add
        </button>
      </header>
    </div>
  );
}

export default App;
