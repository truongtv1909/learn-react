import './test.css'
import React, { Component } from 'react';


class Test extends Component {
    // constructor(props){
    //   super(props);
    //   this.onClickTodo =this.onClickTodo.bind(this)
    // }

    // onClickTodo(){
    //   console.log(this.props.name);
    // }
    render() {
        const { name, fnClick } = this.props;
        let className = 'test' ;
        if(name.status){
            className = className + ' test-status';
        }
      return (
        <div >
            <div onClick = {fnClick} className = {className}>{this.props.name.title}</div>     
        </div>      
      );
    }
  }

export default Test;