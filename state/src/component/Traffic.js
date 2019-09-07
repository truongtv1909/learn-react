import React, { Component} from 'react';
import classNames from 'classnames';
import './style.css';
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class Traffic extends Component {
  constructor(){
    super();
    this.state = {
      curentColor: RED
    };
    
    setInterval(()=>{
      this.setState({
        curentColor: this.getNextColor(this.state.curentColor)
      });
    },1000);
  }

  getNextColor(color){
    switch(color){
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render(){
    console.log(this.state);
  const {curentColor} = this.state;
  console.log(curentColor);
  return (
    <div className="App">
      <div className ="trafficLight">
        <div className={classNames('light','red',{active: curentColor===RED})}></div>
        <div className={classNames('light','orange',{active: curentColor===ORANGE})}></div>
        <div className={classNames('light','green',{active: curentColor===GREEN})}></div>
      </div>
    </div>
  );
}
}
export default Traffic;
