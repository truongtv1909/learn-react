import React, {Component} from 'react';
import TrafficLight from './component/TrafficLight';
import * as co from './component/constant/index';

class App extends Component{
  constructor(){
    super();
    this.state ={
      currenColor: co.RED
  };
  setInterval(()=>{
      this.setState({
          currenColor: this.getNextColor(this.state.currenColor)
      });
  },1000);
  }
  getNextColor(color){
    switch (color){
        case co.RED:
            return co.ORANGE;
        case co.ORANGE:
            return co.GREEN;
        default:
            return co.RED;
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
