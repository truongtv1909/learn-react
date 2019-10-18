import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    render() {
        return (
            <div className="row mt-2">
                <Search fillter={this.props.fillter}></Search>
                <Sort></Sort>
            </div>
        );
    }
}

export default Control;