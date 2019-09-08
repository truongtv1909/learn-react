import React, { Component } from 'react';
import classNames from 'classnames';
import './style.css'
class FnCom extends Component {
  constructor(props){
    super(props)
    this.statusTodo = this.statusTodo.bind(this);
  }
  statusTodo(){
    console.log(this.props);
  }
render(){
  
  return (
    <div className="App">
      <div className ="todo">
        <div onClick = {this.statusTodo} className ={classNames('todo',{list:!this.props.status})}>{this.props.name}</div>  
      </div> 
    </div>
  );
}
}

export default FnCom;
