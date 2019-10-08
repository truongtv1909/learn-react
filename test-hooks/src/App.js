import React from 'react';
import './App.css';
import Count from './components/Count';
import NumberPovider from './context/NumberPovider';
import ClassRamdomNumber from './components/ClassRamdomNumber';
import FunRamdom from './components/FunctionRamdomNumber';
import FunctionRamdom from './components/FunctionRamdomNumber';
function App() {
  return (
    <NumberPovider>
      <div className="App">
        <header className="App-header">
          <Count></Count>
          <ClassRamdomNumber></ClassRamdomNumber>
          <FunctionRamdom></FunctionRamdom>
        </header>
      </div>
    </NumberPovider>
  );
}

export default App;
