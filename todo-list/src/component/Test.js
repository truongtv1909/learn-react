import './test.css'
import React, { Component } from 'react';


class Test extends Component {
    render() {
        const { xx } = this.props;
        let item = this.props.name.status;
        // console.log(xx.status);
        
        let className = 'test' ;
        if(item){
            className = className + ' test-status';
        }
      return (
        <div >
            <div className = {className}>{this.props.name.title}</div>     
        </div>      
      );
    }
  }

export default Test;