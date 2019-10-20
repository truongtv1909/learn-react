import React, { Component } from 'react';
import uuid from 'uuid/v1';
import './App.css';
import TaskFrom from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    let data = JSON.parse(localStorage.getItem('tasks'));
    this.state = {
      tasks: data ? data : [],
      isDisplayForm: false,
      taskEdit: null,
      filter: null,
      sort:{
        by:'name',
        value: 1
      }
    }
    this.onChangeDisplayForm = this.onChangeDisplayForm.bind(this);
    this.onAddNew = this.onAddNew.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
    this.onEditTask = this.onEditTask.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.sort = this.sort.bind(this);
  }
  onChangeDisplayForm() {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
      taskEdit: null
    });
  }
  onAddNew(todo) {
    if (todo.name) {
      if (!todo.id) {
        let newTask = this.state.tasks;
        todo.id = uuid();
        newTask.push(todo);
        this.setState({
          tasks: newTask,
          isDisplayForm: !this.state.isDisplayForm,
        });
      }
      else {
        let tasks = this.state.tasks;
        let index = tasks.findIndex(task => task.id === todo.id)
        let todos = { ...todo, status: todo.status === 'true' ? true : todo.status === true ? true : false }
        this.setState({
          tasks: [
            ...tasks.slice(0, index),
            { ...todos },
            ...tasks.slice(index + 1)
          ],
          isDisplayForm: false,
          taskEdit: null
        });
      }
    }
  }

  onChangeStatus(item) {
    let tasks = this.state.tasks;
    let index = tasks.indexOf(item);
    this.setState({
      tasks: [
        ...tasks.slice(0, index),
        { ...tasks[index], status: !tasks[index].status },
        ...tasks.slice(index + 1)
      ]
    });
  }

  onRemoveTask(item) {
    let tasks = this.state.tasks;
    let index = tasks.indexOf(item);
    tasks.splice(index, 1)
    this.setState({
      tasks: tasks,
      isDisplayForm: false
    });
  }

  onEditTask(item) {
    this.setState({
      isDisplayForm: true,
      taskEdit: item
    });
  }

  onFilter(item) {
    this.setState({
      filter: item
    });
  }

  sort(item){
    this.setState({
      sort:{
        by:item.sortBy,
        value:item.sortValue
      }
    });
  }

  render() {
    // console.log(this.state.sort);
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    let { isDisplayForm, tasks, filter, sort } = this.state;

    if (filter) {
      tasks = tasks.filter(task => {
        if (filter.filterstatus === "0") {
          return task
        } if (filter.filterstatus === "1") {
          return task.status === true
        } if (filter.filterstatus === "2") {
          return task.status === false
        }
      });

      if (filter.filtername) {
        tasks = tasks.filter(task => {
          let arr = task.name.toLowerCase().indexOf(filter.filtername.toLowerCase()) !== -1
          return arr;
        });
      }
    }
    if(sort.by === 'name'){
      tasks.sort((a,b)=>{
        // console.log(a);
        if (a.name > b.name) return sort.value;
        else if(a.name < b.name) return  -sort.value;
        else return 0;
      });
    }
    else{
      tasks.sort((a,b)=>{
        if(a.status > b.status) return -sort.value;
        else if(a.status < b.status) return sort.value;
        else return 0;
      });
    }

    return (
      <div className="App">
        <div className="container">
          <div className="row border mt-2 p-2">
            {isDisplayForm && <TaskFrom taskEdit={this.state.taskEdit} closeForm={this.onChangeDisplayForm} addNew={this.onAddNew} dataEdit={this.onEditTask}></TaskFrom>}
            <div className={isDisplayForm ? "col-8" : "col-12"}>
              <div className="row">
                <div className="col-12 text-left">
                  {!isDisplayForm && <button className="btn btn-primary" onClick={this.onChangeDisplayForm}>Add new</button>}
                </div>
              </div>
              <Control fillter={this.onFilter} sort={this.sort}></Control>
              <TaskList tasks={tasks} changeStatus={this.onChangeStatus} removeTask={this.onRemoveTask} editTask={this.onEditTask} ></TaskList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
