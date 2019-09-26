import React from 'react';
import './App.css';
import NumberProvider from './components/NumberProvider';
import NumberContext from './context/NumberContext';
import Test from './components/Test';

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <Test></Test>
      </div>
    </NumberProvider>
  );
}

export default App;
