import React,{Component} from 'react';
import Count from './components/Counter';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      isRemove: false
    };
    console.log('App - constuctor');
  }
  onRemoveElement(){
    this.setState({
      isRemove: !this.state.isRemove
    });
  }
  render(){
    console.log('App - render');
    return (
      <div className="App">
        <button onClick={()=>this.onRemoveElement()} className="btn btn-danger my-2">{this.state.isRemove?'Add':'Remove'}</button>
 
        <Count></Count>
      </div>
    );
  }
  componentDidUpdate(){
    console.log('App - Didupdate');
  }
  componentDidMount(){
    console.log('App - Didmount');
  }
}
export default App;
