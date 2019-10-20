import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-6">
                <div className="input-group">
                    <input className="form-control"></input>
                    <div className="input-group-append ml-1">
                        <select className="form-control" name="" id="">
                            <option value={"0"}>All</option>
                            <option value={"1"}>Success</option>
                            <option value={"2"}>Continue</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
