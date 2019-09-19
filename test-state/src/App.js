import React, {Component} from 'react';
import TrafficLight from './component/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component{
  constructor(){
    super();
    this.state ={
      currenColor: RED
  };
  setInterval(()=>{
      this.setState({
          currenColor: this.getNextColor(this.state.currenColor)
      });
  },1000);
  }
  getNextColor(color){
    switch (color){
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
}
  render(){
    const currenColor = this.state.currenColor;
    return(
      <div className ="App">
        <div className="container"> 
          <TrafficLight currenColors={currenColor} />
        </div>
      </div>
    );
  }
}
export default App;
