import React from 'react';
import FnCom from './component/FnComponent';
import './App.css';

function App() {
  let todoList =[
    {title: 'todo 1', status: true},
    {title: 'todo 2', status: false},
    {title: 'todo 3', status: true},
    {title: 'todo 4', status: true}
  ];
  function statusTodo(){
    console.log('click');
  }

  let result = todoList.map((e,i)=>{
   

    return  <FnCom
    name = {e.title}
    status = {e.status}
    key = {i}
    // onClick = {statusTodo}
    />

    
  })
  return (
    <div className="App">
      <header className="App-header">
        {result}
      </header>
    </div>
  );
}

export default App;
