import './test.css'
import React, { Component } from 'react';
import complate from '../img/complate.svg';
import uncomplate from '../img/u-complate.svg';

class Test extends Component {
  render() {
      const { name, fnClick } = this.props;
      let className = 'test';
      let url =complate;
      if(name.status){
        className = className + ' test-status';
        url=complate;
      }else{
        url = uncomplate;
      }
    return (
      <tr>
        <td>
          <div >
            <div className = {className}>
              <img onClick = {fnClick} className ="img" src = {url} alt ={this.props.name.title} />
              <p>{this.props.name.title}</p>
            </div>     
          </div>  
        </td>
      </tr>
          
    );
  }
}

export default Test;