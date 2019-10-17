import React, { Component } from 'react';
import TaskItems from './TaskItems'

class TaskList extends Component {
    render() {
        let { tasks,removeTask, changeStatus, editTask } = this.props
        return (
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead className="bg-warning">
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (<TaskItems editTask={editTask} changeStatus={changeStatus} removeTask={removeTask} key={index} task={task} index={index}></TaskItems>))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default TaskList;
