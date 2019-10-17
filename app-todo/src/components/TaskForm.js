import React, { Component } from 'react';

class TaskFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onGetData = this.onGetData.bind(this);
        this.onClearnForm = this.onClearnForm.bind(this);
    }
    onSubmitForm(event) {
        event.preventDefault();
    }
    onGetData(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onClearnForm() {
        this.setState({
            id: '',
            name: '',
            status: false
        });
    }
    componentDidMount() {
        if (this.props.taskEdit) {
            this.setState({
                id: this.props.taskEdit.id,
                name: this.props.taskEdit.name,
                status: this.props.taskEdit.status
            });
        }
    }
    render() {
        let taskEdit = this.props.taskEdit;
        return (
            <div className="col-4">
                <div className="card">
                    <div className="card-header bg-info"> {taskEdit ? 'Edit task' : 'add new task'} </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmitForm}>
                            <div className="form-group text-left">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control" onChange={this.onGetData} value={this.state.name} />
                            </div>
                            <div className="form-group text-left">
                                <label>Status</label>
                                <select className="form-control" value={this.state.status} onChange={this.onGetData} name="status">
                                    <option value={false}>False</option>
                                    <option value={true}>True</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mx-1" onClick={() => this.props.addNew(this.state)}>Save</button>
                            <button type="reset" onClick={this.onClearnForm} className="btn btn-danger mx-1">Reset</button>
                            <button className="btn btn-warning" onClick={this.props.closeForm}>Close</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskFrom;
