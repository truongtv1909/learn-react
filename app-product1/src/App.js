import React,{Component} from 'react';
import './App.css';
import './row2.css';
import SizeSeting from './components/SizeSeting';
import ColorPicker from './components/ColorPicker';
import Result from './components/Result';

class App extends Component {
  constructor(){
    super();
    this.state ={
      color:'red',
      fontSize:15
    }
    this.onSetColor = this.onSetColor.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.onInCrease = this.onInCrease.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  onSetColor(color){
    this.setState({
      color:color
    });
  }
  onDecrease(size){
    if(size>8){
      this.setState({
        fontSize: size -1
      });
    }
  }
  onInCrease(size){
    if(size<40){
      this.setState({
        fontSize: size +1
      });
    }
  }

  onReset(){
    this.setState({
      color:'red',
      fontSize:15
    });
  }

  render(){
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <ColorPicker isColor={this.state.color} setColor={this.onSetColor}></ColorPicker>
          <SizeSeting fontSize ={this.state.fontSize} 
          deCreaseFont={this.onDecrease} 
          reset = {this.onReset}
          inCreaseFont={this.onInCrease}></SizeSeting>
        </div>
        <Result color={this.state.color} size ={this.state.fontSize} ></Result>
      </div>
    </div>
  );
}
}

export default App;
