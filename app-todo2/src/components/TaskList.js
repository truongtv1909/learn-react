import React, { Component } from 'react';
import TaskItem from './TaskItem';
import Control from './Control';

class TaskList extends Component {
    render() {
        return (
            <div className="col-8">
                <Control sort ={this.props.sort}></Control>
                <div className="row my-1">
                    <div className="col-12">
                        <table className="table table-striped">
                            <thead className="bg-warning">
                                <tr>
                                    <th>index</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TaskItem></TaskItem>
                                <TaskItem></TaskItem>
                                <TaskItem></TaskItem>
                                <TaskItem></TaskItem>
                                <TaskItem></TaskItem>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;