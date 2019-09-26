import React, {Component} from 'react';
import NumberContext from '../context/NumberContext';

export default class extends Component{
    constructor(props){
        super(props);
        this.state ={
            number:600
        };
    }
    updateN(){
        this.setState({
            number:Math.random()
        });
    }
    render(){
        return(
            <NumberContext.Provider value={{
                number:this.state.number,
                funUpdateNum: this.updateN.bind(this)
            }}>
                {this.props.children}
            </NumberContext.Provider>
        );
    }
}