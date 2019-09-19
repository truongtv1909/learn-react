import React, {Component} from 'react'

import Todolist from './components/Todolist';
import Title from './components/Title';

class App extends Component{
  constructor(){
    super();
    this.todoItems = [
      {title:"An sang",status: true},
      {title:"Di lam",status: true},
      {title:"Ve voi vo con",status: false},
      {title:"Ca nha di choi",status: false},
    ];
  }
  render(){
    if(this.todoItems.length){
      return(
        <div className="container">
          <Title title="Todo list app-demo" />
          {
            this.todoItems.map((todo,index)=><Todolist items={todo} key ={index}/>)
          }
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