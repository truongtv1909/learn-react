import React, {Component} from 'react'

import Todolist from './components/Todolist';
import Title from './components/Title';
import tick from './components/img/tick.svg';

class App extends Component{
  
  constructor(){
    super();
    let dataTodo = JSON.parse(localStorage.getItem('data'))?JSON.parse(localStorage.getItem('data')):[];

    this.state = {
      newTodo: '',
      todoItems: dataTodo
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
        newTodo:'',
        
      });
      
    }
  }
  onCheckAll(){
    let {todoItems} = this.state;
    let arrComplete = todoItems.map(function(item){
      if(item.status===false){
        item= {...item,status:!item.status}     
      }
      return item
    })
    
    this.setState({
      todoItems:arrComplete
    });
  }
  onchangeText(event){
    this.setState({newTodo:event.target.value});
  }
  onComplete(item){
    let { todoItems } = this.state;
    let index = todoItems.indexOf(item);
    

    this.setState({
      todoItems: [
        ...todoItems.slice(0,index),
        {...todoItems[index],status:!todoItems[index].status},
        ...todoItems.slice(index+1)
      ]
    });
  }
  render(){
    const {todoItems, newTodo} = this.state;
    localStorage.setItem('data',JSON.stringify(todoItems));
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
                todoItems.map((todoItem,index)=><Todolist itemTodo={todoItem} key ={index} click={()=>this.onComplete(todoItem)} />)
              }
            </tbody>
          </table>
        </div>
      )
    }else{
      return(
        <div className="container">
          
          <table className ="table table-bordered mt-4">
            <tbody>
            <tr>
            <th><Title>Todo list app-demo</Title></th>
            </tr>
            <tr>
              <td>
              <input onKeyUp={this.addNewTodo} onChange={this.onchangeText} value={newTodo}
              type="text" placeholder="Add new todo" className="form-control app-input" />
              </td>
            </tr>
            <tr>
              <td>
              <h3>Nothinh todo</h3>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      )
    }
    
  }
}
export default App;