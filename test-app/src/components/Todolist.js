import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todolist.css';
import classNames from 'classnames';
import complete from './img/complate.svg'
import uComplete from './img/u-complate.svg'


class Todolist extends Component{
    render(){
        let {itemTodo,click} = this.props;
        let url;
        if(itemTodo.status){
            url=complete
        }else(
            url=uComplete
        )
        return (
            <tr>
                <td>
                    <div  className ={classNames('todolist',{'complete':itemTodo.status})}>
                        <img onClick = {click} alt="imgs" className="img" src={url} />
                        <p>{itemTodo.title}</p>
                    </div>
                </td>
            </tr>  
        );
    }
}

Todolist.propTypes = {
    itemTodo: PropTypes.shape({
        status: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    click: PropTypes.func
}

export default Todolist;