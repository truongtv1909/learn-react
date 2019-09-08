import './test.css'
import React, { Component } from 'react';

class Test extends Component {
    render() {
      console.log(this.props.name);
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