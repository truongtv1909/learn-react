import React, { Component } from 'react';
import AddForm from './components/AddForm';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      tasks:[
        {id:1,name:'Learn Javascript',status:true}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-2 border p-1">
            <AddForm></AddForm>
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
