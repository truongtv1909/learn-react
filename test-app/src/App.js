import React, {Component} from 'react'

import Todolist from './components/Todolist';
import Title from './components/Title';
import tick from './components/img/tick.svg';

class App extends Component{
  
  constructor(){
    super();
    this.state = {
      newTodo: '',
      todoItems: [
      {title:"An sang",status: true},
      {title:"Di lam",status: true},
      {title:"Ve voi vo con",status: false},
      {title:"Ca nha di choi",status: false}
      ]
    }
    this.addNewTodo = this.addNewTodo.bind(this);
    this.onchangeText = this.onchangeText.bind(this);
    this.onCheckAll = this.onCheckAll.bind(this);
  }
  
  addNewTodo(event){
    let text = event.target.value;
    if(event.keyCode===13){
      if(!text){
        return
      }
      this.setState({
        todoItems:[
          ...this.state.todoItems,
          {title:text,status: false}
        ],
        newTodo:''
      });
    }
  }
  onCheckAll(){
    let {todoItems} = this.state;
    console.log(todoItems);
  }
  onchangeText(event){
    this.setState({newTodo:event.target.value});
  }
  onComplete(item){
    return ()=>{
      let {todoItems} = this.state;
      // console.log(todoItems);
      let currenStatus = item.status;
      let index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,status:!currenStatus
          },
          ...todoItems.slice(index+1)
        ]
      });
    }
  }
  render(){
    const {todoItems, newTodo} = this.state;
    if(todoItems.length){
      return(
        <div className="container">
          <table className ="table table-bordered mt-4">
            <tbody>
              <tr>
                <th><Title title="">Todo list app-demo</Title></th>
              </tr>
              <tr>
                <td className="todolist">
                  <div><img onClick={this.onCheckAll} className="img" alt="tick" src={tick}></img></div>
                  <input onKeyUp={this.addNewTodo} onChange={this.onchangeText} value={newTodo}
                  type="text" placeholder="Add new todo" className="form-control app-input" />
                </td>
              </tr> 
              {
                todoItems.map((todoItem,index)=><Todolist itemTodo={todoItem} key ={index} click={this.onComplete(todoItem)} />)
              }
            </tbody>
          </table>
        </div>
      )
    }else{
      return(
        <div className="container">
          <Title title="Todo list app-demo" />
          <h3>Nothinh todo</h3>
        </div>
      )
    }
    
  }
}
export default App;