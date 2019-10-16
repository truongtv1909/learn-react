import React,{Component} from 'react';
import './App.css';
import TaskFrom from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component  {
  constructor(props){
    super(props);
    let data = JSON.parse(localStorage.getItem('tasks'));
    this.state={
      tasks:data?data:[],
      isDisplayForm: false
    }
    this.onChangeDisplayForm = this.onChangeDisplayForm.bind(this);
  }
  onChangeDisplayForm(){
    this.setState({
      isDisplayForm:!this.state.isDisplayForm
    });
  }
  onAddNew(todo){
    // console.log(todo);
    
  }
  componentDidMount(){
    // let data = [
    //   {id:1,name:'learn Javascrip',status: true},
    //   {id:2,name:'learn ReactJS',status: true},
    //   {id:3,name:'learn VueJS',status: false},
    // ];
    localStorage.setItem('tasks',JSON.stringify(this.state.tasks));
  }
  render(){
    let {isDisplayForm} = this.state;
  return (
    <div className="App">
      <div className="container">
        <div className="row border mt-2 p-2">
          {isDisplayForm && <TaskFrom closeForm={this.onChangeDisplayForm} addNew={this.onAddNew} ></TaskFrom> }
          <div className={isDisplayForm?"col-8":"col-12"}>
              <div className="row">
                <div className="col-12 text-left">
                  {!isDisplayForm && <button className="btn btn-primary" onClick={this.onChangeDisplayForm}>Add new</button>}
                </div>
              </div>
              <Control></Control>
              <TaskList tasks ={this.state.tasks}></TaskList>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
