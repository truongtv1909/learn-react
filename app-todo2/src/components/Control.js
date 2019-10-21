import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    render() {
        return (
            <div className="row">
                <Search></Search>
                <Sort sort ={this.props.sort}></Sort>
            </div>
        );
    }
}

export default Control;
