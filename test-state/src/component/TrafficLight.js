import React, { Component} from 'react';
import './TrafficLight.css';
import classNames from 'classnames';
import * as color from './constant/index';

class TrafficLight extends Component{
    render(){
        const {currenColors} = this.props;
        return (
            <div className="wp">
                <h1 className="my-3">Traffic Light</h1>
                <div className="trafficLight">
                    <div className={classNames('bulb','red',{active: currenColors===color.RED})}></div>
                    <div className={classNames('bulb','orange',{active:currenColors===color.ORANGE})}></div>
                    <div className={classNames('bulb','green',{active:currenColors===color.GREEN})}></div>
                </div>
            </div>
        );
    }
}
export default TrafficLight;