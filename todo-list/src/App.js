
import Demo from './component/Demo';
import Test from './component/Test';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
      newText:'',
      todoItem: [
        { title: 'Vệ sinh cá nhân',status: true},
        { title: 'Ăn sáng',status: true},
        { title: 'Đến công ty',status: false},
        { title: 'Tập gym',status: false},
        { title: 'Đi dạo',status: false}
      ]
    }
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onChaneText = this.onChaneText.bind(this);
  }
    
  onAddTodo(event){
    let {todoItem} = this.state;
      let text = this.refs.k.value;
      if(event.keyCode ===13){// keyCode 13 = enter
        if(!text){
          return;
        }
        this.setState({
        todoItem: [
          ...todoItem,
          {title:text,status:false}
        ],
        newText: ''
      });  
    }
  }

  onChaneText(event){
    this.setState({
      newText: event.target.value
    })
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
          <table className="table table-bordered mt-4 shadow">
            <tbody>
              <tr>
                <th scope="col"><Demo title="DEMO TODO LIST"/></th>
              </tr> 
              <tr>
                <th>
                  <input type = "text" className="form-control" onChange = {this.onChaneText} 
                  value = {this.state.newText} placeholder="add new"  onKeyUp ={this.onAddTodo} ref = "k"></input>
                </th>
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
