import React, { Component } from 'react';
import './Todolist.css';

class Todolist extends Component{
    render(){
        let {items} = this.props;
        let className = 'todolist'; // có thể dùng npm classname: npm install classname --save
        if(items.status){
            className =className + ' complete';
        }
        return (
            <div className ={className}>{items.title}</div>
        );
    }
}
export default Todolist;