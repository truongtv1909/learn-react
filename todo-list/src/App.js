// import React from 'react';

import './App.css';
// import './'
import Demo from './component/Demo';
import Test from './component/Test';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
    todoItem: [
      { title: 'Test class 1',status: true},
      { title: 'Test class 2',status: false},
      { title: 'Test class 3',status: false},
      { title: 'Test class 4',status: true},
      { title: 'Test class 5s',status: false}
    ]
  }
  }

    onItemClick(e){
      return ()=>{
        let curenStatus = e.status;
        let {todoItem} = this.state;
        let index = todoItem.indexOf(e);
        console.log(index);
        this.setState({
          todoItem: [
            ...todoItem.slice(0, index),
            {...e, status:!curenStatus},
            ...todoItem.slice(index + 1)
          ]
        });

      }
    }
    render(){
      const {todoItem} = this.state;
      if(todoItem.length){
        return (
          <div className="App">
            <header className="App-header">
              <Demo title="demo1"/>
              {
                todoItem.map((x,i)=> 
                <Test 
                key = {i}  
                name = {x} 
                fnClick={this.onItemClick(x)}/>)
              }
    
            </header>
          </div>
        );
      }else{
        return (
          <div className ="App">
            <header className="App-header">
            <Demo title="demo1"/>
            <div>Nothing todo</div>
            </header>
          </div>
        );
      }
    
  }
}

export default App;
