import React from 'react';
import TestComFunc from './components/TestComFunc';
// import './App.css';


function App() {
  let employs = [
    { name: "Tran van truong", age: 33, job: "Lap trinh vien" },
    { name: "Nguyen Thi hai ha", age: 29, job: "Phien dich vien" },
    { name: "Tran nguyen bao ngoc", age: 6, job: "Hoc sinh" }
  ];
  function onAddEmploy(event) {
    console.log(event.target.value);
    console.log(event.keyCode);
    console.log(employs);
    if(event.keyCode===13){
      employs.push({name:event.target.value});
    }
  }
  return (
    <div className="container">
      <div className="App">
        <div className="divinput my-2">
          <input type="text" onKeyUp={onAddEmploy}/>
        </div>
        <table className="table table-striped">
          <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
          </tr>
            {employs.map((emp,index) => (
            <TestComFunc employ={emp} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default App;
