import React,{Component} from 'react';

class TaskItems extends Component  {
render(){
    let {task,index} = this.props
return (  
    <tr>
        <td>{index +1}</td>
        <td>{task.name}</td>
        <td><span className={task.status?'badge badge-pill badge-success':'badge badge-pill badge-danger'}>{task.status?'Success':'Continus'}</span></td>
        <td>
            <button className="btn btn-primary">Edit</button> 
            <button className="btn btn-danger mx-1">Delete</button>
        </td>
    </tr>
    );
}
}
export default TaskItems;
