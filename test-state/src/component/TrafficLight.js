import React, { Component} from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

class TrafficLight extends Component{
    render(){
        const {currenColors} = this.props;
        return (
            <div className="wp">
                <h1 className="my-3">Traffic Light</h1>
                <div className="trafficLight">
                    <div className={classNames('bulb','red',{active: currenColors===0})}></div>
                    <div className={classNames('bulb','orange',{active:currenColors===1})}></div>
                    <div className={classNames('bulb','green',{active:currenColors===2})}></div>
                </div>
            </div>
        );
    }
}
export default TrafficLight;