import React,{Component} from 'react';


class TaskFrom extends Component  {
    constructor(props){
        super(props);
        this.state ={
            txtName:'',
            slStatus:true
        }
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onGetData = this.onGetData.bind(this);
    }
    onSubmitForm(event){
        event.preventDefault();
        // console.log(this.state);
        
    }
    onGetData(event){
        // console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render(){
        
    return (  
            <div className="col-4">
            <div className="card">
                <div className ="card-header bg-info"> add new </div>
                <div className ="card-body">
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group text-left">
                    <label>Name</label>
                    <input type="text" name="txtName" className="form-control" onChange={this.onGetData} />
                    </div>
                    <div className="form-group text-left">
                    <label>Status</label>
                    <select className="form-control" value={this.state.slStatus} onChange={this.onGetData} name="slStatus">
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    </div>
                    <button type ="submit" className="btn btn-primary mx-1" onClick={()=>this.props.addNew(this.state)}>Save</button>
                    <button type ="reset" className="btn btn-danger mx-1">Reset</button>
                    <button className="btn btn-warning" onClick={this.props.closeForm} >Close</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}

export default TaskFrom;
