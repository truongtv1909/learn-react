// import React from 'react';
import React, { Component} from 'react'

import './App.css';
import Traffic from './component/Traffic';

class App extends Component {
  render(){
  return (
    <div className="App">
      <div>
        <Traffic/>
      </div>
    </div>
  );
}
}

export default App;
