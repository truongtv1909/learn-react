import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>Learn Javascript</td>
                <td>True</td>
                <td>
                    <button className="btn btn-primary mx-1">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
