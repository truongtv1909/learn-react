// import React from 'react';


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
      { title: 'Test class 2',status: true},
      { title: 'Test class 3',status: false},
      { title: 'Test class 4',status: false},
      { title: 'Test class 5s',status: false}
    ]
  }
  }

    onItemClick(e){
      return ()=>{
        let curenStatus = e.status;
        let {todoItem} = this.state;
        let index = todoItem.indexOf(e);
        this.setState({
          todoItem: [
            ...todoItem.slice(0, index),
            {...e, status:!curenStatus},
            ...todoItem.slice(index + 1)
          ]
        });

      }
    }//end
    render(){
      const {todoItem} = this.state;
      if(todoItem.length){
        return (
          <div className="container">
            <table className="table table-bordered mt-4">
              <tbody>
                <tr>
                <th scope="col"><Demo title="DEMO TODO LIST"/></th>
                </tr> 
                  {
                  todoItem.map((x,i)=> 
                  <Test 
                  key = {i}  
                  name = {x} 
                  fnClick={ this.onItemClick(x)}/>)
                }     
              </tbody>
            </table>
          </div>
        );
      }else{
        return (
          <div className ="App">
            <Demo title="demo1"/>
            <div>Nothing todo</div>
          </div>
        );
      }
    
  }
}

export default App;
