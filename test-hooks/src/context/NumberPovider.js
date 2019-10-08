import React,{Component} from 'react';
import NumberContext from '../context/NumberContext';

export default class NumberProvider extends Component{
    constructor(props){
        super(props);
        this.state={
            number:200
        }
        this.changeNumber= this.changeNumber.bind(this);
    }
    changeNumber(){
        this.setState({
            number:Math.random()
        });
    }
    render(){
        return(
            <NumberContext.Provider  value={
                {
                    number: this.state.number,
                    changeNumber: this.changeNumber
                }
            }>
            {this.props.children}
            </NumberContext.Provider>
        );
    }
}