import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtername: '',
            filterstatus:'0'
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {

        let name = event.target.name;
        let value = event.target.value;
        let obj = {
            filtername: name === 'filtername' ? value : this.state.filtername,
            filterstatus: name === 'filterstatus' ? value : this.state.filterstatus
        }
        this.props.fillter(obj);
        this.setState({
            [name]:value
        });
    }
    render() {
        return (
            <div className="col-6">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="filtername" onChange={this.onChange} />
                        <div className="input-group-append mx-1">
                            <select className="form-control"  onChange={this.onChange} name="filterstatus">
                                <option value="0">All</option>
                                <option value="1">Success</option>
                                <option value="2">Continue</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;
