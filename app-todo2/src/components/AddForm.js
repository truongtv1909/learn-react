import React, { Component } from 'react';

class AddForm extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card">
                    <div className="card-header">
                        Add new
                    </div>
                    <div className="card-body">
                        <form>
                            <div class="form-group">
                                <label>New task</label>
                                <input type="text" className="form-control" name="" />
                            </div>
                            <div className="form-group">
                                <label></label>
                                <select className="form-control" name="">
                                    <option value={false}>False</option>
                                    <option value={true}>True</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddForm;
